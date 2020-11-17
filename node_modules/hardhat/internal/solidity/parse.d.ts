import type { SolidityFilesCache } from "../../builtin-tasks/utils/solidity-files-cache";
interface ParsedData {
    imports: string[];
    versionPragmas: string[];
}
export declare class Parser {
    private _solidityFilesCache?;
    private _cache;
    constructor(_solidityFilesCache?: SolidityFilesCache | undefined);
    parse(fileContent: string, absolutePath: string): ParsedData;
    private _getFromCache;
}
export {};
//# sourceMappingURL=parse.d.ts.map