import { Model, Schema } from "mongoose";
export declare const withEmailCodeSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
export declare const EmailCodeModel: Model<IEmailCode, {}, {}, {}, any, any>;
//# sourceMappingURL=_emailCodeModel.d.ts.map