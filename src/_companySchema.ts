import { ICompany, CompanyTypeArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Schema } from "mongoose";
import { DateSchema, MediaLinkSchema, MediaRelationSchema, MediaNameSchema } from "./_mediaSchema";

export const CompanySchema = new Schema<ICompany>(
  {
    id: { type: String, unique: true, default: () => genPublicID(5) },
    type: { type: String, enum: CompanyTypeArray, required: true },
    name: { type: MediaNameSchema, required: true },
    description: { type: String, default: undefined },
    links: { type: [MediaLinkSchema], default: undefined },
    logo: { type: MediaRelationSchema, default: undefined },
    createdDate: { type: DateSchema, default: undefined },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true, id: false },
);