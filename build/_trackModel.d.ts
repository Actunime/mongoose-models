import { ITrack } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const withTrackSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
    toJSON: {
        virtuals: true;
    };
}, {
    id: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id: string;
}>> & import("mongoose").FlatRecord<{
    id: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const TrackModel: Model<ITrack, {}, {}, {}, import("mongoose").Document<unknown, {}, ITrack> & ITrack & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=_trackModel.d.ts.map