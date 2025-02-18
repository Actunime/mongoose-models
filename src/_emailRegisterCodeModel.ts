import { IEmailRegisterCode } from "@actunime/types";
import { Model, Schema, model, models } from "mongoose";

const EmailRegisterCodeSchema = new Schema<IEmailRegisterCode>(
    {
        code: { type: String, required: true, unique: true, index: "text" },
        email: { type: String, required: true, index: "text" },
        data: { type: Schema.Types.Mixed, required: true },
        device: { type: String },
        createdAt: { type: Date, default: Date.now, index: { expires: '1h' } },
    },
    { timestamps: true, id: false },
);


export const withEmailRegisterCodeSchema = new Schema(
    {
        id: { type: String },
    },
    { _id: false, toJSON: { virtuals: true } },
);

export const EmailRegisterCodeModel = (models.EmailRegisterCode as Model<IEmailRegisterCode>) ||
    model("EmailRegisterCode", EmailRegisterCodeSchema);
