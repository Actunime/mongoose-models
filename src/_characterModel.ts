import {
  CharacterGenderArray,
  CharacterRoleArray,
  CharacterSpeciesArray,
  ICharacter,
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Model, Schema, model, models } from "mongoose";
import { withPersonSchema } from "./_personModel";
import { withImage } from "./_imageModel";
import { MediaDateSchema, MediaTitleSchema } from "./_mediaModel";

const CharacterSchema = new Schema<ICharacter>(
  {
    id: { type: String, default: () => genPublicID(5) },
    isVerified: { type: Boolean, default: false },
    isPreAdded: { type: Boolean, default: false },
    name: MediaTitleSchema,
    age: Number,
    birthDate: MediaDateSchema,
    gender: {
      type: String,
      enum: CharacterGenderArray,
      required: true,
    },
    species: {
      type: String,
      enum: CharacterSpeciesArray,
      required: true,
    },
    description: String,
    avatar: { type: withImage, default: undefined },
    actors: { type: [withPersonSchema], default: undefined },
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } },
);

// CharacterSchema.virtual('name.full').get(function () {
//   return `${this.name.default}`.trim();
// });

export const withCharacterSchema = new Schema(
  {
    id: { type: String, required: true },
    role: { type: String, enum: CharacterRoleArray },
  },
  { _id: false, toJSON: { virtuals: true } },
);

CharacterSchema.virtual("actors.data", {
  ref: "Person",
  localField: "actors.id",
  foreignField: "id",
  justOne: true,
});

CharacterSchema.virtual("avatar.data", {
  ref: "Image",
  localField: "avatar.id",
  foreignField: "id",
  justOne: true,
});

export const CharacterModel =
  (models.Character as Model<ICharacter>) ||
  model("Character", CharacterSchema);
