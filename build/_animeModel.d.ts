import { IAnime } from "@actunime/types";
import { Model } from "mongoose";
export declare const AnimeModel: Model<IAnime, {}, {}, {}, import("mongoose").Document<unknown, {}, IAnime> & import("@actunime/types/_animeType").IAnimeRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=_animeModel.d.ts.map