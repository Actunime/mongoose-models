import { IAccount } from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { model, Model, models, Schema } from "mongoose";

const AccountSchema = new Schema<IAccount>({
    id: { type: String, default: () => genPublicID(8) },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    userId: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    verified: { type: Date, default: undefined },
    deletedAt: { type: Date, default: undefined, index: { expires: '1d' } },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });

AccountSchema.virtual('isDeleted').get(function () {
    return;
});

export const AccountModel = (models.Account as Model<IAccount>) || model("UserAccount", AccountSchema);
