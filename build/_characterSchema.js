import { CharacterGenderArray, CharacterRoleArray, CharacterSpeciesArray, } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Schema } from "mongoose";
import { PersonRelationSchema } from "./_personSchema";
import { DateSchema, MediaRelationSchema, MediaNameSchema } from "./_mediaSchema";
export const CharacterSchema = new Schema({
    id: { type: String, unique: true, default: () => genPublicID(5) },
    name: MediaNameSchema,
    age: { type: Number, default: undefined },
    birthDate: { type: DateSchema, default: undefined },
    gender: { type: String, enum: CharacterGenderArray, default: undefined },
    species: { type: String, enum: CharacterSpeciesArray, default: undefined, },
    description: { type: String, default: undefined },
    avatar: { type: MediaRelationSchema, default: undefined },
    actors: { type: [PersonRelationSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
export const CharacterRelationSchema = new Schema({
    id: { type: String, required: true },
    role: { type: String, enum: CharacterRoleArray, default: undefined },
}, { _id: false });
