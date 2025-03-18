import { ICompany, CompanyTypeArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { DateSchema, MediaLinkSchema, MediaRelationSchema, MediaNameSchema } from "./_mediaModel";

const CompanySchema = new Schema<ICompany>(
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

export const CompanyModel = (models.Company as Model<ICompany>) || model("Company", CompanySchema);
