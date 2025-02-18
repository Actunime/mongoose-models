import { IAnime } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare function CheckAnimeNextEpisode(callbacks?: {
    onNewEpisode?: (anime: IAnime) => void;
    onWarnTotalEpisode?: (anime: IAnime) => void;
    onEnded?: (anime: IAnime) => void;
}): Promise<void>;
export declare const AnimeModel: Model<IAnime, {}, {}, {}, import("mongoose").Document<unknown, {}, IAnime> & IAnime & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=_animeModel.d.ts.map