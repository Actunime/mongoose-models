import { IEmailCode } from "@actunime/types";
import { Model, Schema, model, models } from "mongoose";

const EmailCodeSchema = new Schema<IEmailCode>(
    {
        code: { type: String, required: true, unique: true, index: "text" },
        email: { type: String, required: true, index: "text" },
        accountId: { type: String, required: true, index: "text" },
        device: { type: String },
        createdAt: { type: Date, default: Date.now, index: { expires: '1h' } },
    },
    { timestamps: true, id: false },
);


export const withEmailCodeSchema = new Schema(
    {
        id: { type: String },
    },
    { _id: false, toJSON: { virtuals: true } },
);

export const EmailCodeModel = (models.EmailCode as Model<IEmailCode>) ||
    model("EmailCode", EmailCodeSchema);
