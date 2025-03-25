import { genPublicID } from "@actunime/utils";
import { Schema } from "mongoose";
import { MediaNameSchema } from "./_mediaSchema";
export const GroupeSchema = new Schema({
    id: { type: String, unique: true, default: () => genPublicID(5) },
    name: MediaNameSchema,
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
