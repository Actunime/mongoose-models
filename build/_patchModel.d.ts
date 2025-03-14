import { IPatch } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const PatchModel: Model<IPatch<any, "CREATE" | "UPDATE" | "DELETE" | "RESTORE">, {}, {}, {}, import("mongoose").Document<unknown, {}, IPatch<any, "CREATE" | "UPDATE" | "DELETE" | "RESTORE">> & IPatch<any, "CREATE" | "UPDATE" | "DELETE" | "RESTORE"> & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=_patchModel.d.ts.map