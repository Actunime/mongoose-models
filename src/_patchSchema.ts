import {
  TargetPathArray,
  PatchStatusArray,
  PatchTypeArray,
  IPatch
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Schema } from "mongoose";
import { MediaRelationSchema } from "./_mediaSchema";

export const PatchSchema = new Schema<IPatch>(
  {
    id: { type: String, unique: true, default: () => genPublicID(8) },
    ref: { type: MediaRelationSchema, default: undefined },
    type: { type: String, enum: PatchTypeArray, required: true },
    status: { type: String, enum: PatchStatusArray, default: 'PENDING' },
    target: { type: MediaRelationSchema, required: true },
    targetPath: { type: String, enum: TargetPathArray, required: true },
    description: { type: String, default: undefined },
    reason: { type: String, default: undefined },
    original: { type: Schema.Types.Mixed, default: undefined },
    changes: { type: Schema.Types.Mixed, default: undefined },
    isChangesUpdated: { type: Boolean, default: undefined },
    author: { type: MediaRelationSchema, required: true },
    moderator: { type: MediaRelationSchema, default: undefined },
  },
  { timestamps: true, id: false }
);