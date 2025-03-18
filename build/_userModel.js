"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const _mediaModel_1 = require("./_mediaModel");
const withUserAnimeListeSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    episode: { type: Number, default: undefined },
    status: { type: String, enum: types_1.UserAnimeListStatusArray, required: true },
    score: { type: Number, default: undefined },
    note: { type: String, default: undefined },
    favoris: { type: Boolean, default: false },
    rank: { type: Number, default: undefined },
    startedDate: { type: _mediaModel_1.DateSchema, default: undefined },
    completedDate: { type: _mediaModel_1.DateSchema, default: undefined },
}, { _id: false, timestamps: true });
const userSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)() },
    accountId: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    description: { type: String },
    roles: { type: [String], default: ["MEMBER"] },
    avatar: { type: _mediaModel_1.MediaRelationSchema, default: undefined },
    banner: { type: _mediaModel_1.MediaRelationSchema, default: undefined },
    preferences: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    animes: { type: [withUserAnimeListeSchema], default: [] }
}, { timestamps: true, id: false });
exports.UserModel = mongoose_1.models.User || (0, mongoose_1.model)("User", userSchema);
