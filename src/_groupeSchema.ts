import { IGroupe } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { MediaNameSchema } from "./_mediaSchema";

const GroupeSchema = new Schema<IGroupe>(
  {
    id: { type: String, unique: true, default: () => genPublicID(5) },
    name: MediaNameSchema,
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } },
);