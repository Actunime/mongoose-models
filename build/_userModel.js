"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPremiumModel = exports.UserDisabledModel = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const _mediaModel_1 = require("./_mediaModel");
const _imageModel_1 = require("./_imageModel");
const withUserAnimeListeSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    episode: { type: Number, default: undefined },
    status: { type: String, enum: types_1.UserAnimeListStatusArray, required: true },
    score: { type: Number, default: undefined },
    note: { type: String, default: undefined },
    favoris: { type: Boolean, default: false },
    rank: { type: Number, default: undefined },
    startedDate: { type: String, default: undefined },
    completedDate: { type: String, default: undefined },
}, { _id: false, timestamps: true, toJSON: { virtuals: true } });
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        index: true,
        default: () => (0, utils_1.genPublicID)(),
    },
    accountId: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    description: { type: String },
    roles: { type: [String], default: ["MEMBER"] },
    avatar: { type: _imageModel_1.withImage, default: undefined },
    banner: { type: _imageModel_1.withImage, default: undefined },
    preferences: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    animes: { type: [withUserAnimeListeSchema], default: [] },
    deletedAt: { type: Date, default: undefined, index: { expires: '1d' } },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
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
exports.UserModel = mongoose_1.models.User || (0, mongoose_1.model)("User", userSchema);
const UserDisabledSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        index: true,
        default: () => (0, utils_1.genPublicID)(),
    },
    reason: { type: String, required: true },
    user: { type: _mediaModel_1.withSchema, required: true },
    by: { type: _mediaModel_1.withSchema, required: true },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
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
exports.UserDisabledModel = mongoose_1.models.UserDisabled || (0, mongoose_1.model)("UserDisabled", UserDisabledSchema);
/**
 *
 * User Premium
 *
 */
const UserPremiumSchema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true,
        index: true,
        default: () => (0, utils_1.genPublicID)(),
    },
    user: { type: _mediaModel_1.withSchema, required: true },
    level: { type: Number, required: true },
    expires: { type: Date, expires: 60 * 60 * 24, required: true },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
exports.UserPremiumModel = mongoose_1.models.UserPremium || (0, mongoose_1.model)("UserPremium", UserPremiumSchema);
