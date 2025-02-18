"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = void 0;
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const AccountSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(8) },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    userId: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    verified: { type: Date, default: undefined },
    deletedAt: { type: Date, default: undefined, index: { expires: '1d' } },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
AccountSchema.virtual('isDeleted').get(function () {
    return;
});
exports.AccountModel = mongoose_1.models.Account || (0, mongoose_1.model)("UserAccount", AccountSchema);
