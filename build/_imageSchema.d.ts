import { Schema } from "mongoose";
import { IImage } from "@actunime/types";
export declare const ImageSchema: Schema<IImage, import("mongoose").Model<IImage, any, any, any, import("mongoose").Document<unknown, any, IImage> & import("@actunime/types/_imageType").IImageRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IImage, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IImage>> & import("mongoose").FlatRecord<IImage> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
