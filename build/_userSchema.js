import { Schema } from "mongoose";
import { genPublicID } from "@actunime/utils";
import { MediaRelationSchema } from "./_mediaSchema";
export const userSchema = new Schema({
    id: { type: String, unique: true, default: () => genPublicID() },
    accountId: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    description: { type: String },
    permissions: { type: [String], default: [] },
    avatar: { type: MediaRelationSchema, default: undefined },
    banner: { type: MediaRelationSchema, default: undefined },
    options: { type: Schema.Types.Mixed, default: {} }
}, { timestamps: true, id: false });
