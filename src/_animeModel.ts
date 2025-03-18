import {
  IAnime,
  IAnimeEpisode,
  AnimeFormatArray,
  MediaSourceArray,
  MediaStatusArray,
  MediaGenresArray,
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { CharacterRelationSchema } from "./_characterModel";
import { MangaRelationSchema } from "./_mangaModel";
import {
  DateSchema,
  MediaDateSchema,
  MediaLinkSchema,
  MediaRelationSchema,
  MediaTitleSchema,
} from "./_mediaModel";
import { PersonRelationSchema } from "./_personModel";

const AnimeEpisodeSchema = new Schema<IAnimeEpisode>(
  {
    airing: { type: Number, default: undefined },
    nextAiringDate: { type: DateSchema, default: undefined },
    total: { type: Number, default: undefined },
    durationMinutes: { type: Number, default: undefined },
  },
  { _id: false },
);

const AnimeRelationSchema = new Schema(
  {
    id: { type: String, required: true },
    label: { type: String, default: undefined },
  },
  { _id: false },
);

const AnimeSchema = new Schema<IAnime>(
  {
    id: { type: String, unique: true, default: () => genPublicID(8) },
    groupe: { type: MediaRelationSchema, required: true },
    parent: { type: AnimeRelationSchema, default: undefined },
    manga: { type: MangaRelationSchema, default: undefined },
    source: { type: String, enum: MediaSourceArray, default: undefined },
    title: { type: MediaTitleSchema, required: true },
    synopsis: { type: String, default: undefined },
    date: { type: MediaDateSchema, default: undefined },
    status: { type: String, enum: MediaStatusArray, default: undefined },
    trailer: { type: String, default: undefined },
    format: { type: String, enum: AnimeFormatArray, required: true },
    vf: { type: Boolean, default: undefined },
    episodes: { type: AnimeEpisodeSchema, default: undefined },
    adult: { type: Boolean, default: undefined },
    explicit: { type: Boolean, default: undefined },
    cover: { type: MediaRelationSchema, default: undefined },
    banner: { type: MediaRelationSchema, default: undefined },
    genres: { type: [String], enum: MediaGenresArray, default: undefined },
    links: { type: [MediaLinkSchema], default: undefined },
    companys: { type: [MediaRelationSchema], default: undefined },
    staffs: { type: [PersonRelationSchema], default: undefined },
    characters: { type: [CharacterRelationSchema], default: undefined },
    tracks: { type: [MediaRelationSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true, id: false },
);

export const AnimeModel = (models.Anime as Model<IAnime>) || model<IAnime>("Anime", AnimeSchema);