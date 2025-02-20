import { IAnime } from "@actunime/types";
import { Model } from "mongoose";
export declare function CheckAnimeNextEpisode(callbacks?: {
    onNewEpisode?: (anime: IAnime) => void;
    onWarnTotalEpisode?: (anime: IAnime) => void;
    onEnded?: (anime: IAnime) => void;
}): Promise<void>;
export declare const AnimeModel: Model<IAnime, {}, {}, {}, any, any>;
//# sourceMappingURL=_animeModel.d.ts.map