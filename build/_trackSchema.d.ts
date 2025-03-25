import { ITrack } from "@actunime/types";
import { Schema } from "mongoose";
export declare const TrackSchema: Schema<ITrack, import("mongoose").Model<ITrack, any, any, any, import("mongoose").Document<unknown, any, ITrack> & import("@actunime/types").ITrackRoot & import("@actunime/types").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ITrack, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ITrack>> & import("mongoose").FlatRecord<ITrack> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
