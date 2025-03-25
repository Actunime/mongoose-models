import { Schema } from "mongoose";
import { UserAnimeListStatusArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { DateSchema, MediaRelationSchema } from "./_mediaSchema";
const withUserAnimeListeSchema = new Schema({
    id: { type: String, required: true },
    episode: { type: Number, default: undefined },
    status: { type: String, enum: UserAnimeListStatusArray, required: true },
    score: { type: Number, default: undefined },
    note: { type: String, default: undefined },
    favoris: { type: Boolean, default: false },
    rank: { type: Number, default: undefined },
    startedDate: { type: DateSchema, default: undefined },
    completedDate: { type: DateSchema, default: undefined },
}, { _id: false, timestamps: true });
export const userSchema = new Schema({
    id: { type: String, unique: true, default: () => genPublicID() },
    accountId: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    description: { type: String },
    roles: { type: [String], default: ["MEMBER"] },
    avatar: { type: MediaRelationSchema, default: undefined },
    banner: { type: MediaRelationSchema, default: undefined },
    preferences: { type: Schema.Types.Mixed, default: {} },
    animes: { type: [withUserAnimeListeSchema], default: [] }
}, { timestamps: true, id: false });
