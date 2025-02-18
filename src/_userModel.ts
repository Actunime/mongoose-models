import { Model, Schema, model, models } from "mongoose";
import {
  IUserAnimeListe,
  UserAnimeListStatusArray,
  type IUser,
  type IUserDisabled,
  type IUserPremium,
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { withSchema } from "./_mediaModel";
import { withImage } from "./_imageModel";

const withUserAnimeListeSchema = new Schema<IUserAnimeListe>(
  {
    id: { type: String, required: true },
    episode: { type: Number, default: undefined },
    status: { type: String, enum: UserAnimeListStatusArray, required: true },
    score: { type: Number, default: undefined },
    note: { type: String, default: undefined },
    favoris: { type: Boolean, default: false },
    rank: { type: Number, default: undefined },
    startedAt: { type: Date, default: undefined },
    completedAt: { type: Date, default: undefined },
  },
  { _id: false, timestamps: true, toJSON: { virtuals: true } },
);


const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      unique: true,
      index: true,
      default: () => genPublicID(),
    },
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    bio: { type: String },
    roles: { type: [String], default: ["MEMBER"] },
    avatar: { type: withImage, default: undefined },
    banner: { type: withImage, default: undefined },
    preferences: { type: Schema.Types.Mixed, default: {} },
    animes: { type: [withUserAnimeListeSchema], default: [] },
    deletedAt: { type: Date, default: undefined, index: { expires: '1d' } },
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } },
);

userSchema.virtual("avatar.data", {
  ref: "Image",
  localField: "avatar.id",
  foreignField: "id",
  justOne: true,
});

userSchema.virtual("banner.data", {
  ref: "Image",
  localField: "banner.id",
  foreignField: "id",
  justOne: true,
});

userSchema.virtual("disabled", {
  ref: "UserDisabled",
  localField: "id",
  foreignField: "user.id",
  justOne: true,
});


export const UserModel =
  (models.User as Model<IUser>) || model("User", userSchema);


const UserDisabledSchema = new Schema<IUserDisabled>(
  {
    id: {
      type: String,
      unique: true,
      index: true,
      default: () => genPublicID(),
    },
    reason: { type: String, required: true },
    user: { type: withSchema, required: true },
    by: { type: withSchema, required: true },
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } },
);

UserDisabledSchema.virtual("by.data", {
  ref: "User",
  localField: "by.id",
  foreignField: "id",
  justOne: true,
});

UserDisabledSchema.virtual("user.data", {
  ref: "User",
  localField: "user.id",
  foreignField: "id",
  justOne: true,
});

export const UserDisabledModel =
  models.UserDisabled || model("UserDisabled", UserDisabledSchema);

/**
 *
 * User Premium
 *
 */

const UserPremiumSchema = new Schema<IUserPremium>(
  {
    id: {
      type: String,
      unique: true,
      index: true,
      default: () => genPublicID(),
    },
    user: { type: withSchema, required: true },
    level: { type: Number, required: true },
    expires: { type: Date, expires: 60 * 60 * 24, required: true },
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } },
);

export const UserPremiumModel =
  models.UserPremium || model("UserPremium", UserPremiumSchema);