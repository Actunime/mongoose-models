import { Schema } from "mongoose";
import { IImage, ImageLabelArray, TargetPathArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { MediaRelationSchema } from "./_mediaSchema";

export const ImageSchema = new Schema<IImage>(
  {
    id: { type: String, unique: true, default: () => genPublicID(5) },
    label: { type: String, enum: ImageLabelArray, required: true },
    target: { type: MediaRelationSchema, required: true },
    targetPath: { type: String, enum: TargetPathArray, required: true },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true, id: false },
);
