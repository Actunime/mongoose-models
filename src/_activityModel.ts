import {
  IActivity,
  ActivityActionArray,
  TargetPathArray,
  ActivityTypeArray,
  IActivityTarget,
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { MediaRelationSchema } from "./_mediaModel";

const ActivityTargetSchema = new Schema<IActivityTarget>(
  {
    id: { type: String, required: true },
    path: { type: String, enum: TargetPathArray, required: true },
  }, { _id: false },
);

const ActivitySchema = new Schema<IActivity>(
  {
    id: { type: String, unique: true, default: () => genPublicID(8) },
    type: { type: String, enum: ActivityTypeArray, required: true },
    action: { type: String, enum: ActivityActionArray, required: true },
    targets: { type: [ActivityTargetSchema], required: true, default: undefined },
    author: { type: MediaRelationSchema, default: undefined },
    params: { type: Object, default: undefined },
  },
  { timestamps: true, id: false },
);

export const ActivityModel = (models.Activity as Model<IActivity>) || model("Activity", ActivitySchema);
