import { IPerson } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const withPersonSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
    toJSON: {
        virtuals: true;
    };
}, {
    id: string;
    role?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id: string;
    role?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    id: string;
    role?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PersonModel: Model<IPerson, {}, {}, {}, import("mongoose").Document<unknown, {}, IPerson> & IPerson & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=_personModel.d.ts.map