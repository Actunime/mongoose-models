import { IPreRegister } from "@actunime/types";
import { Model, Schema, model, models } from "mongoose";

const PreRegisterSchema = new Schema<IPreRegister>(
    {
        code: { type: String, required: true, unique: true, index: "text" },
        email: { type: String, required: true, unique: true, index: "text" },
        data: { type: Schema.Types.Mixed, required: true },
        device: { type: String },
        createdAt: { type: Date, default: Date.now, index: { expires: '1h' } },
    },
    { timestamps: true, id: false },
);


export const withPreRegisterSchema = new Schema(
    {
        id: { type: String },
    },
    { _id: false, toJSON: { virtuals: true } },
);

export const PreRegisterModel = (models.PreRegister as Model<IPreRegister>) ||
    model("PreRegister", PreRegisterSchema);
