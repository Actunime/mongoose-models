import { IPreRegister } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const withPreRegisterSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
export declare const PreRegisterModel: Model<IPreRegister, {}, {}, {}, import("mongoose").Document<unknown, {}, IPreRegister> & IPreRegister & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=_preRegister.d.ts.map