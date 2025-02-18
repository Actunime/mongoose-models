import { IGroupe } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const withGroupeSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
    toJSON: {
        virtuals: true;
    };
}, {
    id: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id: string;
}>> & import("mongoose").FlatRecord<{
    id: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const GroupeModel: Model<IGroupe, {}, {}, {}, import("mongoose").Document<unknown, {}, IGroupe> & IGroupe & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=_groupeModel.d.ts.map