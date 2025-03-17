import { IPerson, PersonRoleArray } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { MediaLinkSchema } from "./_mediaModel";
import { withImage } from "./_imageModel";

const PersonSchema = new Schema<IPerson>(
  {
    id: { type: String, default: () => genPublicID(5) },
    isVerified: { type: Boolean, default: false },
    isPreAdded: { type: Boolean, default: false },
    isGroupe: { type: Boolean, default: false },
    name: {
      default: { type: String, required: true },
      alias: { type: [String], trim: true, default: undefined },
    },
    birthDate: { type: Date, default: undefined },
    deathDate: { type: Date, default: undefined },
    description: String,
    avatar: { type: withImage, default: undefined },
    links: { type: [MediaLinkSchema], default: undefined },
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } },
);

// PersonSchema.virtual("name.full").get(function () {
//   return `${this.name.first} ${this.name.last || ""}`.trim();
// });

PersonSchema.virtual("avatar.data", {
  ref: "Image",
  localField: "avatar.id",
  foreignField: "id",
  justOne: true,
});

export const withPersonSchema = new Schema(
  {
    id: { type: String, required: true },
    role: { type: String, enum: PersonRoleArray, default: undefined },
  },
  { _id: false, toJSON: { virtuals: true } },
);

export const PersonModel =
  (models.Person as Model<IPerson>) || model("Person", PersonSchema, "persons");
