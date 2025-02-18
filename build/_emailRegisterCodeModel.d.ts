import { IEmailRegisterCode } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const withEmailRegisterCodeSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
    toJSON: {
        virtuals: true;
    };
}, {
    id?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    id?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const EmailRegisterCodeModel: Model<IEmailRegisterCode, {}, {}, {}, import("mongoose").Document<unknown, {}, IEmailRegisterCode> & IEmailRegisterCode & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=_emailRegisterCodeModel.d.ts.map