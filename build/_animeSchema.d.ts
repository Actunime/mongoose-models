import { IAnime } from "@actunime/types";
import { Schema } from "mongoose";
export declare const AnimeSchema: Schema<IAnime, import("mongoose").Model<IAnime, any, any, any, import("mongoose").Document<unknown, any, IAnime> & import("@actunime/types/_animeType").IAnimeRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IAnime, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IAnime>> & import("mongoose").FlatRecord<IAnime> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
