"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaRelationSchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaSchema_1 = require("./_mediaSchema");
const _personSchema_1 = require("./_personSchema");
const _characterSchema_1 = require("./_characterSchema");
const MangaChapterVolumesSchema = new mongoose_1.Schema({
    airing: { type: Number, default: undefined },
    nextAiringDate: { type: _mediaSchema_1.MediaDateSchema, default: undefined },
    total: { type: Number, default: undefined },
});
exports.MangaRelationSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    label: { type: String, default: undefined },
}, { _id: false });
const MangaSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    groupe: { type: _mediaSchema_1.MediaRelationSchema, required: true },
    parent: { type: exports.MangaRelationSchema, default: undefined },
    title: { type: _mediaSchema_1.MediaTitleSchema, required: true },
    date: { type: _mediaSchema_1.MediaDateSchema, default: undefined },
    synopsis: { type: String, default: undefined },
    source: { type: String, enum: types_1.MediaSourceArray, default: undefined },
    format: { type: String, enum: types_1.MangaFormatArray, default: undefined },
    vf: { type: Boolean, default: undefined },
    genres: { type: [String], default: undefined },
    status: { type: String, enum: types_1.MediaStatusArray, default: undefined },
    chapters: { type: MangaChapterVolumesSchema, default: undefined },
    volumes: { type: MangaChapterVolumesSchema, default: undefined },
    adult: { type: Boolean, default: undefined },
    explicit: { type: Boolean, default: undefined },
    links: { type: [_mediaSchema_1.MediaLinkSchema], default: undefined },
    cover: { type: [_mediaSchema_1.MediaRelationSchema], default: undefined },
    banner: { type: [_mediaSchema_1.MediaRelationSchema], default: undefined },
    companys: { type: [_mediaSchema_1.MediaRelationSchema], default: undefined },
    staffs: { type: [_personSchema_1.PersonRelationSchema], default: undefined },
    characters: { type: [_characterSchema_1.CharacterRelationSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
