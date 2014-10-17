'use strict';
var objectUtils = require('../../xm/objectUtils');
var Opt;
(function (Opt) {
    Opt.version = 'version';
    Opt.verbose = 'verbose';
    Opt.style = 'style';
    Opt.dev = 'dev';
    Opt.config = 'config';
    Opt.cacheDir = 'cacheDir';
    Opt.cacheMode = 'cacheMode';
    Opt.resolve = 'resolve';
    Opt.save = 'save';
    Opt.bundle = 'bundle';
    Opt.overwrite = 'overwrite';
    Opt.min = 'min';
    Opt.max = 'max';
    Opt.limit = 'limit';
    Opt.commit = 'commit';
    Opt.semver = 'semver';
    Opt.date = 'date';
    Opt.action = 'action';
    Opt.info = 'info';
    Opt.history = 'history';
    Opt.services = 'services';
})(Opt = exports.Opt || (exports.Opt = {}));
objectUtils.lockPrimitives(Opt);
var Group;
(function (Group) {
    Group.manage = 'manage';
    Group.query = 'query';
    Group.support = 'support';
    Group.help = 'help';
})(Group = exports.Group || (exports.Group = {}));
objectUtils.lockPrimitives(Group);
var Action;
(function (Action) {
    Action.install = 'install';
    Action.open = 'open';
    Action.browse = 'browse';
    Action.visit = 'visit';
    Action.compare = 'compare';
    Action.update = 'update';
})(Action = exports.Action || (exports.Action = {}));
objectUtils.lockPrimitives(Action);
//# sourceMappingURL=const.js.map