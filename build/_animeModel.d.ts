import { IAnime, IAnimeRoot } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const AnimeModel: Model<IAnime, {}, {}, {}, import("mongoose").Document<unknown, {}, IAnime> & IAnimeRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<IAnime, Model<IAnime, any, any, any, import("mongoose").Document<unknown, any, IAnime> & IAnimeRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IAnime, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IAnime>> & import("mongoose").FlatRecord<IAnime> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
