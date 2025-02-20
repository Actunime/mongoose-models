import { IAuthorizationCode } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const withAuthorizationCodeSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
export declare const AuthorizationCodeModel: Model<IAuthorizationCode, {}, {}, {}, import("mongoose").Document<unknown, {}, IAuthorizationCode> & IAuthorizationCode & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=_authorizationCodeModel.d.ts.map