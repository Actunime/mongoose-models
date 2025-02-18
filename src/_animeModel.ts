import {
  IAnime,
  IAnimeEpisode,
  AnimeFormatArray,
  MediaSourceArray,
  MediaStatusArray,
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { withCharacterSchema } from "./_characterModel";
import { withCompanySchema } from "./_companyModel";
import { withGroupeSchema } from "./_groupeModel";
import { withMangaSchema } from "./_mangaModel";
import {
  MediaDateSchema,
  MediaLinkSchema,
  MediaTitleSchema,
} from "./_mediaModel";
import { withPersonSchema } from "./_personModel";
import { withTrackSchema } from "./_trackModel";
import { withImage } from "./_imageModel";
// import { DiscordWebhook } from "@actunime/utils-server";

const AnimeEpisodeSchema = new Schema<IAnimeEpisode>(
  {
    airing: { type: Number },
    nextAiringDate: { type: Date },
    total: { type: Number },
    durationMinute: { type: Number },
  },
  { _id: false },
);

const withAnimeSchema = new Schema(
  {
    id: { type: String },
    sourceLabel: {
      type: String,
      enum: MediaSourceArray,
      default: undefined,
    },
    parentLabel: {
      type: String,
      enum: ["SEQUEL", "SPIN_OFF", "ALTERNATIVE", "REBOOT"],
      default: undefined,
    },
  },
  { _id: false, toJSON: { virtuals: true } },
);

const AnimeSchema = new Schema<IAnime>(
  {
    id: { type: String, default: () => genPublicID(8) },
    isVerified: { type: Boolean, default: false },
    groupe: { type: withGroupeSchema, required: true, default: undefined },
    parent: { type: withAnimeSchema, default: undefined },
    title: { type: MediaTitleSchema, required: true },
    date: { type: MediaDateSchema, default: undefined },
    cover: { type: withImage, default: undefined },
    banner: { type: withImage, default: undefined },
    synopsis: { type: String, default: undefined },
    source: { type: withMangaSchema, default: undefined },
    format: {
      type: String,
      enum: AnimeFormatArray,
      required: true,
      default: undefined,
    },
    vf: { type: Boolean, default: false },
    trailer: { type: String, default: undefined },
    genres: { type: [String], default: [] },
    // themes: { type: [String], default: undefined },
    status: { type: String, enum: MediaStatusArray, default: "any" },
    episodes: { type: AnimeEpisodeSchema, default: {} },
    adult: { type: Boolean, default: false },
    explicit: { type: Boolean, default: false },
    links: { type: [MediaLinkSchema], default: [] },
    companys: { type: [withCompanySchema], default: [] },
    staffs: { type: [withPersonSchema], default: [] },
    characters: { type: [withCharacterSchema], default: [] },
    tracks: { type: [withTrackSchema], default: [] },
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } },
);

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


export async function CheckAnimeNextEpisode(callbacks?: {
  onNewEpisode?: (anime: IAnime) => void;
  onWarnTotalEpisode?: (anime: IAnime) => void;
  onEnded?: (anime: IAnime) => void;
}) {
  const animesNewEpisodes = await AnimeModel.find({
    "episodes.nextAiringDate": { $lt: new Date() },
  });

  for await (const anime of animesNewEpisodes) {
    if (
      anime.episodes?.nextAiringDate &&
      anime.episodes?.nextAiringDate.getTime() < Date.now()
    ) {
      if (anime.episodes?.airing !== undefined) {
        if (anime.episodes?.total !== undefined) {
          if (anime.episodes?.airing + 1 >= anime.episodes?.total) {
            anime.episodes.airing = anime.episodes?.total;
            anime.episodes.nextAiringDate = undefined;
            anime.status = "ENDED";
            if (!anime.date) anime.date = {};
            anime.date.end = new Date();
            callbacks?.onEnded?.(anime);
          } else {
            anime.episodes.airing = anime.episodes?.airing + 1;
            anime.episodes.nextAiringDate = new Date(
              anime.episodes?.nextAiringDate.getTime() + 60000 * 60 * 24 * 7,
            );
            callbacks?.onNewEpisode?.(anime);
          }
        } else {
          // Créer un signalement system pour le fait qu'il y a pas de total d'épisode
          anime.episodes.airing = anime.episodes?.airing + 1;
          anime.episodes.nextAiringDate = new Date(
            anime.episodes?.nextAiringDate.getTime() + 60000 * 60 * 24 * 7,
          );
          callbacks?.onWarnTotalEpisode?.(anime);
          callbacks?.onNewEpisode?.(anime);
        }
      } else {
        anime.episodes.airing = 0;

        if (anime.episodes?.total !== undefined) {
          if (anime.episodes.airing + 1 >= anime.episodes?.total) {
            anime.episodes.airing = anime.episodes?.total;
            anime.episodes.nextAiringDate = undefined;
            anime.status = "ENDED";
            if (!anime.date) anime.date = {};
            anime.date.end = new Date();
            callbacks?.onEnded?.(anime);
          } else {
            anime.episodes.airing = anime.episodes?.airing + 1;
            callbacks?.onNewEpisode?.(anime);
          }
        } else {
          // Créer un signalement system pour le fait qu'il y a pas de total d'épisode
          anime.episodes.airing = anime.episodes?.airing + 1;
          if (anime.episodes.nextAiringDate)
            anime.episodes.nextAiringDate = new Date(
              anime.episodes.nextAiringDate.getTime() + 60000 * 60 * 24 * 7,
            );
          else {
            anime.episodes.nextAiringDate = new Date(
              Date.now() + 60000 * 60 * 24 * 7,
            );
          }
          callbacks?.onWarnTotalEpisode?.(anime);
          callbacks?.onNewEpisode?.(anime);
        }
      }

      await anime.save();
    }
  }
}

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

export const AnimeModel =
  (models.Anime as Model<IAnime>) || model<IAnime>("Anime", AnimeSchema);
