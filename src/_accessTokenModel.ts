import { IAccessToken } from "@actunime/types";
import { Model, Schema, model, models } from "mongoose";

const AccessTokenSchema = new Schema<IAccessToken>(
  {
    token: { type: String, required: true, unique: true, index: "text" },
    refreshToken: { type: String, required: true, unique: true, index: "text" },
    clientId: { type: String, required: true, index: "text" },
    userId: { type: String, required: true, index: "text" },
    device: { type: String },
    lastActivity: { type: Date, default: Date.now, index: { expires: '7d' } },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true, id: false },
);

export const withAccessTokenSchema = new Schema(
  {
    id: { type: String },
  },
  { _id: false, toJSON: { virtuals: true } },
);

export const AccessTokenModel =
  (models.AccessToken as Model<IAccessToken>) || model("AccessToken", AccessTokenSchema);
