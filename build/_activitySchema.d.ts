import { IActivity } from "@actunime/types";
import { Schema } from "mongoose";
export declare const ActivitySchema: Schema<IActivity, import("mongoose").Model<IActivity, any, any, any, import("mongoose").Document<unknown, any, IActivity> & import("@actunime/types").IActivityRoot & {
    id: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IActivity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IActivity>> & import("mongoose").FlatRecord<IActivity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
