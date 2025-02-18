import { IAuthorizationCode } from "@actunime/types";
import { Model, Schema, model, models } from "mongoose";

const AuthorizationCodeSchema = new Schema<IAuthorizationCode>(
    {
        code: { type: String, required: true, unique: true, index: "text" },
        clientId: { type: String, required: true, index: "text" },
        userId: { type: String, required: true, index: "text" },
        device: { type: String },
        createdAt: { type: Date, default: Date.now, index: { expires: '1m' } },
    },
    { timestamps: true, id: false },
);

export const withAuthorizationCodeSchema = new Schema(
    {
        id: { type: String },
    },
    { _id: false, toJSON: { virtuals: true } },
);

export const AuthorizationCodeModel = (models.AuthorizationCode as Model<IAuthorizationCode>) ||
    model("AuthorizationCode", AuthorizationCodeSchema);
