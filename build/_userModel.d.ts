import { Model } from "mongoose";
import { type IUser } from "@actunime/types";
export declare const UserModel: Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser> & import("@actunime/types/_userType").IUserRoot & {
    id: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
