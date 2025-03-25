import { Schema } from "mongoose";
import { type IUser } from "@actunime/types";
export declare const userSchema: Schema<IUser, import("mongoose").Model<IUser, any, any, any, import("mongoose").Document<unknown, any, IUser> & import("@actunime/types").IUserRoot & {
    id: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IUser, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IUser>> & import("mongoose").FlatRecord<IUser> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
