import { TrackTypeArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Schema } from "mongoose";
import { DateSchema, MediaLinkSchema, MediaRelationSchema, MediaNameSchema } from "./_mediaSchema";
import { PersonRelationSchema } from "./_personSchema";
export const TrackSchema = new Schema({
    id: { type: String, unique: true, default: () => genPublicID(5) },
    type: { type: String, enum: TrackTypeArray, required: true },
    name: { type: MediaNameSchema, required: true },
    releaseDate: { type: DateSchema, default: undefined },
    description: { type: String, default: undefined },
    cover: { type: MediaRelationSchema, default: undefined },
    artists: { type: [PersonRelationSchema], default: undefined },
    links: { type: [MediaLinkSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
