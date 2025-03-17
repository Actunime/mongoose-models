"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeModel = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _characterModel_1 = require("./_characterModel");
const _companyModel_1 = require("./_companyModel");
const _groupeModel_1 = require("./_groupeModel");
const _mangaModel_1 = require("./_mangaModel");
const _mediaModel_1 = require("./_mediaModel");
const _personModel_1 = require("./_personModel");
const _trackModel_1 = require("./_trackModel");
const _imageModel_1 = require("./_imageModel");
// import { DiscordWebhook } from "@actunime/utils-server";
const AnimeEpisodeSchema = new mongoose_1.Schema({
    airing: { type: Number, default: undefined },
    nextAiringDate: { type: _mediaModel_1.MediaDateSchema, default: undefined },
    total: { type: Number, default: undefined },
    durationMinutes: { type: Number, default: undefined },
}, { _id: false });
const withAnimeSchema = new mongoose_1.Schema({
    id: { type: String },
    sourceLabel: {
        type: String,
        enum: types_1.MediaSourceArray,
        default: undefined,
    },
    parentLabel: {
        type: String,
        enum: ["SEQUEL", "SPIN_OFF", "ALTERNATIVE", "REBOOT"],
        default: undefined,
    },
}, { _id: false, toJSON: { virtuals: true } });
const AnimeSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(8) },
    isVerified: { type: Boolean, default: false },
    groupe: { type: _groupeModel_1.withGroupeSchema, required: true, default: undefined },
    parent: { type: withAnimeSchema, default: undefined },
    title: { type: _mediaModel_1.MediaTitleSchema, required: true },
    date: { type: _mediaModel_1.MediaDateSchema, default: undefined },
    cover: { type: _imageModel_1.withImage, default: undefined },
    banner: { type: _imageModel_1.withImage, default: undefined },
    synopsis: { type: String, default: undefined },
    manga: { type: _mangaModel_1.withMangaSchema, default: undefined },
    source: { type: String, enum: types_1.MediaSourceArray, default: undefined },
    format: {
        type: String,
        enum: types_1.AnimeFormatArray,
        required: true,
        default: undefined,
    },
    vf: { type: Boolean, default: false },
    trailer: { type: String, default: undefined },
    genres: { type: [String], enum: types_1.MediaGenresArray, default: undefined },
    // themes: { type: [String], default: undefined },
    status: { type: String, enum: types_1.MediaStatusArray, default: "any" },
    episodes: { type: AnimeEpisodeSchema, default: undefined },
    adult: { type: Boolean, default: false },
    explicit: { type: Boolean, default: false },
    links: { type: [_mediaModel_1.MediaLinkSchema], default: undefined },
    companys: { type: [_companyModel_1.withCompanySchema], default: undefined },
    staffs: { type: [_personModel_1.withPersonSchema], default: undefined },
    characters: { type: [_characterModel_1.withCharacterSchema], default: undefined },
    tracks: { type: [_trackModel_1.withTrackSchema], default: undefined },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
// AnimeSchema.pre("aggregate", async function () {
//   await CheckAnimeNextEpisode({
//     onNewEpisode: (anime) => {
//       DiscordWebhook.info(`Épisode n°${anime.episodes?.airing} est en cours de diffusion`, anime.title.default, `Système automatique à titre indicatif (beta)`);
//     },
//     onWarnTotalEpisode: (anime) => {
//       DiscordWebhook.warning(`Pas de total d'épisode ! (avertissement)`, anime.title.default, `Nombre total d'épisodes manquants à définir rapidement - Système automatique (beta)`);
//     },
//     onEnded: (anime) => {
//       DiscordWebhook.info(`La diffusion est terminé`, anime.title.default, `Système automatique à titre indicatif (beta)`);
//     }
//   });
// });
// export async function CheckAnimeNextEpisode(callbacks?: {
//   onNewEpisode?: (anime: IAnime) => void;
//   onWarnTotalEpisode?: (anime: IAnime) => void;
//   onEnded?: (anime: IAnime) => void;
// }) {
//   const animesNewEpisodes = await AnimeModel.find({
//     "episodes.nextAiringDate": { $lt: new Date() },
//   });
//   for await (const anime of animesNewEpisodes) {
//     if (
//       anime.episodes?.nextAiringDate &&
//       new Date(anime.episodes?.nextAiringDate).getTime() < Date.now()
//     ) {
//       if (anime.episodes?.airing !== undefined) {
//         if (anime.episodes?.total !== undefined) {
//           if (anime.episodes?.airing + 1 >= anime.episodes?.total) {
//             anime.episodes.airing = anime.episodes?.total;
//             anime.episodes.nextAiringDate = undefined;
//             anime.status = "ENDED";
//             if (!anime.date) anime.date = {};
//             anime.date.end = new Date().toString();
//             callbacks?.onEnded?.(anime);
//           } else {
//             anime.episodes.airing = anime.episodes?.airing + 1;
//             anime.episodes.nextAiringDate = new Date(
//               new Date(anime.episodes?.nextAiringDate).getTime() + 60000 * 60 * 24 * 7,
//             ).toString();
//             callbacks?.onNewEpisode?.(anime);
//           }
//         } else {
//           // Créer un signalement system pour le fait qu'il y a pas de total d'épisode
//           anime.episodes.airing = anime.episodes?.airing + 1;
//           anime.episodes.nextAiringDate = new Date(
//             new Date(anime.episodes?.nextAiringDate).getTime() + 60000 * 60 * 24 * 7,
//           ).toString();
//           callbacks?.onWarnTotalEpisode?.(anime);
//           callbacks?.onNewEpisode?.(anime);
//         }
//       } else {
//         anime.episodes.airing = 0;
//         if (anime.episodes?.total !== undefined) {
//           if (anime.episodes.airing + 1 >= anime.episodes?.total) {
//             anime.episodes.airing = anime.episodes?.total;
//             anime.episodes.nextAiringDate = undefined;
//             anime.status = "ENDED";
//             if (!anime.date) anime.date = {};
//             anime.date.end = new Date().toString();
//             callbacks?.onEnded?.(anime);
//           } else {
//             anime.episodes.airing = anime.episodes?.airing + 1;
//             callbacks?.onNewEpisode?.(anime);
//           }
//         } else {
//           // Créer un signalement system pour le fait qu'il y a pas de total d'épisode
//           anime.episodes.airing = anime.episodes?.airing + 1;
//           if (anime.episodes.nextAiringDate)
//             anime.episodes.nextAiringDate = new Date(
//               new Date(anime.episodes.nextAiringDate).getTime() + 60000 * 60 * 24 * 7,
//             ).toString();
//           else {
//             anime.episodes.nextAiringDate = new Date(
//               Date.now() + 60000 * 60 * 24 * 7,
//             ).toString();
//           }
//           callbacks?.onWarnTotalEpisode?.(anime);
//           callbacks?.onNewEpisode?.(anime);
//         }
//       }
//       await anime.save();
//     }
//   }
// }
AnimeSchema.virtual("groupe.data", {
    ref: "Groupe",
    localField: "groupe.id",
    foreignField: "id",
    justOne: true,
});
AnimeSchema.virtual("parent.data", {
    ref: "Anime",
    localField: "parent.id",
    foreignField: "id",
    justOne: true,
});
AnimeSchema.virtual("source.data", {
    ref: "Manga",
    localField: "source.id",
    foreignField: "id",
    justOne: true,
});
AnimeSchema.virtual("cover.data", {
    ref: "Image",
    localField: "cover.id",
    foreignField: "id",
    justOne: true,
});
AnimeSchema.virtual("banner.data", {
    ref: "Image",
    localField: "banner.id",
    foreignField: "id",
    justOne: true,
});
AnimeSchema.virtual("companys.data", {
    ref: "Company",
    localField: "companys.id",
    foreignField: "id",
    justOne: true,
});
AnimeSchema.virtual("staffs.data", {
    ref: "Person",
    localField: "staffs.id",
    foreignField: "id",
    justOne: true,
});
AnimeSchema.virtual("characters.data", {
    ref: "Character",
    localField: "characters.id",
    foreignField: "id",
    justOne: true,
});
AnimeSchema.virtual("tracks.data", {
    ref: "Track",
    localField: "tracks.id",
    foreignField: "id",
    justOne: true,
});
exports.AnimeModel = mongoose_1.models.Anime || (0, mongoose_1.model)("Anime", AnimeSchema);
