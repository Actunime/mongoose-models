import {
  TargetPathArray,
  PatchStatusArray,
  PatchTypeArray,
  IPatch
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { withSchema } from "./_mediaModel";

const PatchSchema = new Schema<IPatch>(
  {
    id: { type: String, unique: true, default: () => genPublicID(8) },
    ref: { type: withSchema, required: true },
    type: { type: String, enum: PatchTypeArray, required: true },
    status: { type: String, enum: PatchStatusArray, default: "PENDING" },
    target: { type: withSchema, required: true, default: undefined },
    targetPath: { type: String, enum: TargetPathArray, required: true },
    description: { type: String, default: undefined },
    reason: { type: String, default: undefined },
    original: { type: Schema.Types.Mixed, default: undefined },
    changes: { type: Schema.Types.Mixed, default: undefined },
    isChangesUpdated: { type: Boolean, default: false },
    author: { type: withSchema, required: true },
    moderator: { type: withSchema, default: undefined },
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } },
);


export const PatchModel =
  (models.Patch as Model<IPatch>) || model<IPatch>("Patch", PatchSchema);
