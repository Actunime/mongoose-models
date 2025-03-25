import { PersonRoleArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Schema } from "mongoose";
import { DateSchema, MediaLinkSchema, MediaRelationSchema, MediaNameSchema } from "./_mediaSchema";
export const PersonSchema = new Schema({
    id: { type: String, unique: true, default: () => genPublicID(5) },
    name: { type: MediaNameSchema, required: true },
    birthDate: { type: DateSchema, default: undefined },
    deathDate: { type: DateSchema, default: undefined },
    description: { type: String, default: undefined },
    avatar: { type: MediaRelationSchema, default: undefined },
    links: { type: [MediaLinkSchema], default: undefined },
    isGroupe: { type: Boolean, default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
export const PersonRelationSchema = new Schema({
    id: { type: String, required: true },
    role: { type: String, enum: PersonRoleArray, default: undefined },
}, { _id: false });
