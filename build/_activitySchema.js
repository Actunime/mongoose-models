import { ActivityActionArray, TargetPathArray, ActivityTypeArray, } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Schema } from "mongoose";
import { MediaRelationSchema } from "./_mediaSchema";
const ActivityTargetSchema = new Schema({
    id: { type: String, required: true },
    path: { type: String, enum: TargetPathArray, required: true },
}, { _id: false });
export const ActivitySchema = new Schema({
    id: { type: String, unique: true, default: () => genPublicID(8) },
    type: { type: String, enum: ActivityTypeArray, required: true },
    action: { type: String, enum: ActivityActionArray, required: true },
    targets: { type: [ActivityTargetSchema], required: true, default: undefined },
    author: { type: MediaRelationSchema, default: undefined },
    params: { type: Object, default: undefined },
}, { timestamps: true, id: false });
