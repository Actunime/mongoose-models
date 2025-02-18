import { IAccessToken } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const withAccessTokenSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
export declare const AccessTokenModel: Model<IAccessToken, {}, {}, {}, import("mongoose").Document<unknown, {}, IAccessToken> & IAccessToken & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=_accessTokenModel.d.ts.map