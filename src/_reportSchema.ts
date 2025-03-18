import {
  IReport,
  TargetPathArray,
  ReportStatusArray,
  ReportSubjectArray,
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { MediaRelationSchema } from "./_mediaSchema";

const ReportSchema = new Schema<IReport>(
  {
    id: { type: String, unique: true, default: () => genPublicID(8) },
    status: { type: String, enum: ReportStatusArray, default: "PENDING" },
    target: { type: MediaRelationSchema, required: true },
    targetPath: { type: String, enum: TargetPathArray, required: true },
    subject: { type: String, enum: ReportSubjectArray, required: true },
    message: { type: String, required: true },
    author: { type: MediaRelationSchema, required: true },
  },
  { timestamps: true, id: false },
);