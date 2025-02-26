import { IPatch } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const PatchModel: Model<IPatch<any, "CREATE" | "UPDATE" | "MODERATOR_CREATE" | "MODERATOR_UPDATE">, {}, {}, {}, import("mongoose").Document<unknown, {}, IPatch<any, "CREATE" | "UPDATE" | "MODERATOR_CREATE" | "MODERATOR_UPDATE">> & IPatch<any, "CREATE" | "UPDATE" | "MODERATOR_CREATE" | "MODERATOR_UPDATE"> & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=_patchModel.d.ts.map