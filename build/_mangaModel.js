"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaModel = exports.withMangaSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _characterModel_1 = require("./_characterModel");
const _companyModel_1 = require("./_companyModel");
const _groupeModel_1 = require("./_groupeModel");
const _mediaModel_1 = require("./_mediaModel");
const _personModel_1 = require("./_personModel");
const _imageModel_1 = require("./_imageModel");
const MangaChapterVolumesSchema = new mongoose_1.Schema({
    airing: { type: Number },
    nextAiringDate: { type: Date },
    total: { type: Number },
});
exports.withMangaSchema = new mongoose_1.Schema({
    id: { type: String },
    sourceLabel: {
        type: String,
        enum: types_1.MediaSourceArray,
        default: undefined,
    },
    parentLabel: {
        type: String,
        enum: types_1.MediaParentLabelArray,
        default: undefined,
    },
}, { _id: false, toJSON: { virtuals: true } });
const MangaSchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(5) },
    isVerified: { type: Boolean, default: false },
    isPreAdded: { type: Boolean, default: false },
    groupe: { type: _groupeModel_1.withGroupeSchema, required: true },
    parent: { type: exports.withMangaSchema, default: undefined },
    title: { type: _mediaModel_1.MediaTitleSchema, required: true },
    date: { type: _mediaModel_1.MediaDateSchema, default: undefined },
    cover: { type: [_imageModel_1.withImage], default: undefined },
    banner: { type: [_imageModel_1.withImage], default: undefined },
    synopsis: { type: String, default: undefined },
    source: { type: exports.withMangaSchema, default: undefined },
    format: {
        type: String,
        enum: types_1.MangaFormatArray,
        default: undefined,
    },
    vf: { type: Boolean, default: undefined },
    genres: { type: [String], default: undefined },
    themes: { type: [String], default: undefined },
    status: { type: String, enum: types_1.MediaStatusArray },
    chapters: { type: MangaChapterVolumesSchema, default: undefined },
    volumes: { type: MangaChapterVolumesSchema, default: undefined },
    adult: { type: Boolean, default: undefined },
    explicit: { type: Boolean, default: undefined },
    links: { type: [_mediaModel_1.MediaLinkSchema], default: undefined },
    companys: { type: [_companyModel_1.withCompanySchema], default: undefined },
    staffs: { type: [_personModel_1.withPersonSchema], default: undefined },
    characters: { type: [_characterModel_1.withCharacterSchema], default: undefined },
}, { timestamps: true, id: false });
MangaSchema.virtual("groupe.data", {
    ref: "Groupe",
    localField: "groupe.id",
    foreignField: "id",
    justOne: true,
});
MangaSchema.virtual("parent.data", {
    ref: "Manga",
    localField: "parent.id",
    foreignField: "id",
    justOne: true,
});
MangaSchema.virtual("source.data", {
    ref: "Manga",
    localField: "source.id",
    foreignField: "id",
    justOne: true,
});
MangaSchema.virtual("companys.data", {
    ref: "Company",
    localField: "companys.id",
    foreignField: "id",
    justOne: true,
});
MangaSchema.virtual("staffs.data", {
    ref: "Person",
    localField: "staffs.id",
    foreignField: "id",
    justOne: true,
});
MangaSchema.virtual("characters.data", {
    ref: "Character",
    localField: "characters.id",
    foreignField: "id",
    justOne: true,
});
MangaSchema.virtual("tracks.data", {
    ref: "Track",
    localField: "tracks.id",
    foreignField: "id",
    justOne: true,
});
exports.MangaModel = mongoose_1.models.Manga || (0, mongoose_1.model)("Manga", MangaSchema);
