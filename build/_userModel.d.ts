import { Model, Schema } from "mongoose";
import { type IUser, type IUserDisabled, type IUserPremium } from "@actunime/types";
export declare const UserModel: Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser> & IUser & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
export declare const UserDisabledModel: Model<any, {}, {}, {}, any, any> | Model<IUserDisabled, {}, {}, {}, import("mongoose").Document<unknown, {}, IUserDisabled> & IUserDisabled & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<IUserDisabled, Model<IUserDisabled, any, any, any, import("mongoose").Document<unknown, any, IUserDisabled> & IUserDisabled & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IUserDisabled, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IUserDisabled>> & import("mongoose").FlatRecord<IUserDisabled> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const UserPremiumModel: Model<any, {}, {}, {}, any, any> | Model<IUserPremium, {}, {}, {}, import("mongoose").Document<unknown, {}, IUserPremium> & IUserPremium & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<IUserPremium, Model<IUserPremium, any, any, any, import("mongoose").Document<unknown, any, IUserPremium> & IUserPremium & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IUserPremium, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IUserPremium>> & import("mongoose").FlatRecord<IUserPremium> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=_userModel.d.ts.map