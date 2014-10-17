/// <reference path="../../../src/tsd/_ref.d.ts" />
import GithubRepo = require('../../git/GithubRepo');
import Context = require('../context/Context');
import IndexManager = require('./IndexManager');
import SelectorQuery = require('./SelectorQuery');
import ConfigIO = require('./ConfigIO');
import ContentLoader = require('./ContentLoader');
import InfoParser = require('./InfoParser');
import Installer = require('./Installer');
import Resolver = require('./Resolver');
declare class Core {
    context: Context;
    repo: GithubRepo;
    index: IndexManager;
    selector: SelectorQuery;
    config: ConfigIO;
    content: ContentLoader;
    parser: InfoParser;
    installer: Installer;
    resolver: Resolver;
    private _apiCacheMode;
    private _rawCacheMode;
    constructor(context: Context);
    updateConfig(): void;
    useCacheMode(modeName: string, rawMode?: string): void;
}
export = Core;
