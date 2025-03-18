import { IGroupe } from "@actunime/types";
import { Model } from "mongoose";
export declare const GroupeModel: Model<IGroupe, {}, {}, {}, import("mongoose").Document<unknown, {}, IGroupe> & import("@actunime/types/_groupeType").IGroupeRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
