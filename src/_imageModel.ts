import { Model, model, models, Schema } from "mongoose";
import { IImage, ImageLabelArray, TargetPathArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";

export const withImage = new Schema(
  {
    id: { type: String, required: true },
  },
  { _id: false, toJSON: { virtuals: true } },
);

const ImageSchema = new Schema<IImage>(
  {
    id: { type: String, default: () => genPublicID(5) },
    label: { type: String, enum: ImageLabelArray },
    targetPath: { type: String, enum: TargetPathArray, required: true },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } },
);

ImageSchema.virtual("location").get(function () {
  return `/img/${this.targetPath?.toLocaleLowerCase() + "s"}/${this.id}.webp`;
});

const rootURL = `http${process.env.NODE_ENV === "production" ? "s" : ""}://${process.env.IMAGE_HOST}${process.env.NODE_ENV === "production" ? "" : `:${process.env.IMAGE_PORT}`}`;

ImageSchema.virtual("url").get(function () {
  return `${rootURL}/${this.targetPath?.toLocaleLowerCase() + "s"}/${this.id}.webp`;
});

export const ImageModel =
  (models.Image as Model<IImage>) || model<IImage>("Image", ImageSchema);
