import {
  IActivity,
  ActivityActionArray,
  TargetPathArray,
  ActivityTypeArray,
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { withSchema } from "./_mediaModel";

const withTargetSchema = new Schema(
  {
    id: { type: String, required: true },
    path: { type: String, enum: TargetPathArray, required: true },
  },
  { _id: false, toJSON: { virtuals: true } },
);

const ActivitySchema = new Schema<IActivity>(
  {
    id: { type: String, default: () => genPublicID(8) },
    type: {
      type: String,
      enum: ActivityTypeArray,
      required: true,
    },
    action: {
      type: String,
      enum: ActivityActionArray,
      required: true,
    },
    author: { type: withSchema, default: undefined },
    targets: { type: [withTargetSchema], required: true, default: undefined },
    params: { type: Object, default: undefined },
  },
  { timestamps: true, id: false },
);

export const ActivityModel =
  (models.Activity as Model<IActivity>) || model("Activity", ActivitySchema);
