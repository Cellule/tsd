declare class PackageDefinition {
    name: string;
    definitions: string[];
    manager: string;
    constructor(name: string, definitions: string[], manager?: string);
}
export = PackageDefinition;
