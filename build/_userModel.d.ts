import { Model, Schema } from "mongoose";
export declare const UserModel: Model<IUser, {}, {}, {}, any, any>;
export declare const UserDisabledModel: Model<any, {}, {}, {}, any, any> | Model<{
    [x: string]: unknown;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    [x: string]: unknown;
}> & {
    [x: string]: unknown;
} & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<IUserDisabled, Model<IUserDisabled, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    [x: string]: unknown;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    [x: string]: unknown;
}>> & import("mongoose").FlatRecord<{
    [x: string]: unknown;
}> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
export declare const UserPremiumModel: Model<any, {}, {}, {}, any, any> | Model<{
    [x: string]: unknown;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    [x: string]: unknown;
}> & {
    [x: string]: unknown;
} & Required<{
    _id: unknown;
}> & {
    __v: number;
}, Schema<IUserPremium, Model<IUserPremium, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    [x: string]: unknown;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    [x: string]: unknown;
}>> & import("mongoose").FlatRecord<{
    [x: string]: unknown;
}> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
//# sourceMappingURL=_userModel.d.ts.map