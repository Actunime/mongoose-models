"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupeModel = exports.withGroupeSchema = void 0;
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const GroupeSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(5) },
    isVerified: { type: Boolean, default: false },
    isPreAdded: { type: Boolean, default: false },
    name: _mediaModel_1.MediaTitleSchema,
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
GroupeSchema.virtual("animes", {
    ref: "Anime",
    localField: "id",
    foreignField: "groupe.id",
    justOne: false,
});
GroupeSchema.virtual("mangas", {
    ref: "Manga",
    localField: "id",
    foreignField: "groupe.id",
    justOne: false,
});
exports.withGroupeSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
}, { _id: false, toJSON: { virtuals: true } });
exports.GroupeModel = mongoose_1.models.Groupe || (0, mongoose_1.model)("Groupe", GroupeSchema);
