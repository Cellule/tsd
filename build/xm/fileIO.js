'use strict';
var fs = require('fs');
var path = require('path');
var globMod = require('glob');
var VError = require('verror');
var Promise = require('bluebird');
var mkdirp = require('mkdirp');
var rimrafMod = require('rimraf');
var mkdirpP = Promise.promisify(mkdirp);
function distributeDir(base, name, levels, chunk) {
    if (chunk === void 0) { chunk = 1; }
    name = name.replace(/(^[\\\/]+)|([\\\/]+$)/g, '');
    if (levels === 0) {
        return base;
    }
    if (chunk === 0) {
        return base;
    }
    var arr = [base];
    var steps = Math.max(0, Math.min(name.length - 2, levels * chunk));
    for (var i = 0; i < steps; i += chunk) {
        arr.push(name.substr(i, chunk));
    }
    return path.join.apply(path, arr);
}
exports.distributeDir = distributeDir;
function parseJson(text) {
    var json;
    try {
        json = JSON.parse(text);
    }
    catch (err) {
        if (err.name === 'SyntaxError') {
        }
        throw (err);
    }
    return json;
}
exports.parseJson = parseJson;
function readJSONSync(src) {
    return parseJson(String(fs.readFileSync(src, { encoding: 'utf8' })));
}
exports.readJSONSync = readJSONSync;
function readJSONCB(src, callback) {
    fs.readFile(path.resolve(src), { encoding: 'utf8' }, function (err, text) {
        if (err || typeof text !== 'string') {
            return callback(err, null);
        }
        var json = null;
        try {
            json = parseJson(text);
        }
        catch (err) {
            return callback(err, null);
        }
        return callback(null, json);
    });
}
exports.readJSONCB = readJSONCB;
function readJSON(src) {
    return read(src, { encoding: 'utf8' }).then(function (text) {
        return parseJson(text);
    });
}
exports.readJSON = readJSON;
function writeJSONSync(dest, data) {
    dest = path.resolve(dest);
    mkdirCheckSync(path.dirname(dest));
    fs.writeFileSync(dest, JSON.stringify(data, null, 2), { encoding: 'utf8' });
}
exports.writeJSONSync = writeJSONSync;
function writeJSON(filename, data) {
    return write(filename, JSON.stringify(data, null, 2), { encoding: 'utf8' });
}
exports.writeJSON = writeJSON;
function readFileSync(dest, encoding) {
    if (encoding === void 0) { encoding = 'utf8'; }
    return fs.readFileSync(dest, { encoding: encoding });
}
exports.readFileSync = readFileSync;
function writeFileSync(dest, data, encoding) {
    if (encoding === void 0) { encoding = 'utf8'; }
    dest = path.resolve(dest);
    mkdirCheckSync(path.dirname(dest), true);
    fs.writeFileSync(dest, data, { encoding: encoding });
}
exports.writeFileSync = writeFileSync;
function mkdirCheckSync(dir, writable) {
    if (writable === void 0) { writable = false; }
    dir = path.resolve(dir);
    if (fs.existsSync(dir)) {
        if (!fs.statSync(dir).isDirectory()) {
            throw new Error('path exists but is not a directory ' + dir);
        }
        if (writable) {
            fs.chmodSync(dir, '744');
        }
    }
    else {
        if (writable) {
            mkdirp.sync(dir, '744');
        }
        else {
            mkdirp.sync(dir);
        }
    }
    return dir;
}
exports.mkdirCheckSync = mkdirCheckSync;
function mkdirCheck(dir, writable) {
    if (writable === void 0) { writable = false; }
    dir = path.resolve(dir);
    return exists(dir).then(function (exists) {
        if (exists) {
            return isDirectory(dir).then(function (isDir) {
                if (!isDir) {
                    throw (new Error('path exists but is not a directory ' + dir));
                }
                if (writable) {
                    return chmod(dir, '744');
                }
            });
        }
        else if (writable) {
            return mkdirpP(dir, '744');
        }
        else {
            return mkdirpP(dir);
        }
    }).return(dir);
}
exports.mkdirCheck = mkdirCheck;
function canWriteFile(targetPath, overwrite) {
    return exists(targetPath).then(function (exists) {
        if (!exists) {
            return Promise.resolve(true);
        }
        return isFile(targetPath).then(function (isFile) {
            if (isFile) {
                return overwrite;
            }
            return false;
        });
    });
}
exports.canWriteFile = canWriteFile;
function removeFile(target) {
    return exists(target).then(function (exists) {
        if (!exists) {
            return;
        }
        return isFile(target).then(function (isFile) {
            if (!isFile) {
                throw new Error('not a file ' + target);
            }
            return remove(target);
        });
    });
}
exports.removeFile = removeFile;
function rimraf(target) {
    return new Promise(function (resolve, reject) {
        rimrafMod(target, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(undefined);
            }
        });
    });
}
exports.rimraf = rimraf;
var utimes = Promise.promisify(fs.utimes);
function touchFile(src, atime, mtime) {
    return stat(src).then(function (stat) {
        atime = (atime || new Date());
        mtime = (mtime || stat.mtime);
        return utimes(src, atime, mtime);
    }).return();
}
exports.touchFile = touchFile;
function findup(dir, name) {
    return Promise.attempt(function () {
        if (dir === '/') {
            throw new Error('could not find package.json up from ' + dir);
        }
        else if (!dir || dir === '.') {
            throw new Error('cannot find package.json from unspecified directory');
        }
        var file = path.join(dir, name);
        return exists(file).then(function (exists) {
            if (exists) {
                return Promise.resolve(file);
            }
            var dirName = path.dirname(dir);
            if (dirName === dir) {
                throw new Error('cannot find file ' + name);
            }
            return findup(path.dirname(dir), name).then(function (file) {
                return file;
            });
        });
    });
}
exports.findup = findup;
function exists(filename) {
    return new Promise(function (resolve) {
        fs.exists(filename, resolve);
    }).catch(function () {
        return false;
    });
}
exports.exists = exists;
function stat(filename) {
    return new Promise(function (resolve, reject) {
        fs.stat(filename, function (err, stat) {
            if (err) {
                reject(err);
            }
            else {
                resolve(stat);
            }
        });
    });
}
exports.stat = stat;
function isFile(filename) {
    return stat(filename).then(function (stat) {
        return stat.isFile();
    });
}
exports.isFile = isFile;
function isDirectory(filename) {
    return stat(filename).then(function (stat) {
        return stat.isDirectory();
    });
}
exports.isDirectory = isDirectory;
function read(filename, opts) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, opts, function (err, content) {
            if (err) {
                reject(err);
            }
            else {
                resolve(content);
            }
        });
    });
}
exports.read = read;
function write(filename, content, opts) {
    filename = path.resolve(filename);
    return mkdirCheck(path.dirname(filename), true).then(function () {
        return new Promise(function (resolve, reject) {
            fs.writeFile(filename, content, opts, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(undefined);
                }
            });
        });
    });
}
exports.write = write;
function remove(filename) {
    return new Promise(function (resolve, reject) {
        fs.unlink(filename, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(undefined);
            }
        });
    });
}
exports.remove = remove;
function chmod(filename, mode) {
    return new Promise(function (resolve, reject) {
        fs.chmod(filename, mode, function (err) {
            if (err) {
                reject(err);
            }
            else {
                resolve(undefined);
            }
        });
    });
}
exports.chmod = chmod;
function glob(pattern, opts) {
    return new Promise(function (resolve, reject) {
        globMod(pattern, (opts || {}), function (err, paths) {
            if (err) {
                reject(err);
            }
            else {
                resolve(paths);
            }
        });
    });
}
exports.glob = glob;
function concat(arrays) {
    return Array.prototype.concat.apply([], arrays);
}
;
function readdir(basePath) {
    return new Promise(function (resolve, reject) {
        fs.readdir(basePath, function (error, list) {
            if (error) {
                return reject(new VError(error, 'Can\'t list %s', JSON.stringify(path)));
            }
            else {
                resolve(list);
            }
        });
    });
}
exports.readdir = readdir;
function listTree(basePath, guard) {
    basePath = String(basePath || '');
    if (!basePath) {
        basePath = '.';
    }
    guard = guard || function (basePath, stat) {
        return true;
    };
    return stat(basePath).then(function (stat) {
        var paths = [];
        var include = guard(basePath, stat);
        if (include) {
            paths.push([basePath]);
        }
        if (include !== null && stat.isDirectory()) {
            return readdir(basePath).then(function (children) {
                paths.push.apply(paths, children.map(function (child) {
                    return listTree(path.join(basePath, child), guard);
                }));
                return paths;
            });
        }
        else {
            return Promise.resolve(paths);
        }
    }).catch(function (reason) {
        return [];
    }).then(Promise.all).then(concat);
}
exports.listTree = listTree;