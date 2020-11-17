/// <reference types="bn.js" />
import Common from "ethereumjs-common";
import { BN } from "ethereumjs-util";
import { JsonRpcClient } from "../../jsonrpc/client";
export declare function makeForkCommon(forkClient: JsonRpcClient, forkBlockNumber: BN): Promise<Common>;
//# sourceMappingURL=makeForkCommon.d.ts.map