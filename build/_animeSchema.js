"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _characterSchema_1 = require("./_characterSchema");
const _mangaSchema_1 = require("./_mangaSchema");
const _mediaSchema_1 = require("./_mediaSchema");
const _personSchema_1 = require("./_personSchema");
const AnimeEpisodeSchema = new mongoose_1.Schema({
    airing: { type: Number, default: undefined },
    nextAiringDate: { type: _mediaSchema_1.DateSchema, default: undefined },
    total: { type: Number, default: undefined },
    durationMinutes: { type: Number, default: undefined },
}, { _id: false });
const AnimeRelationSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    label: { type: String, default: undefined },
}, { _id: false });
const AnimeSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(8) },
    groupe: { type: _mediaSchema_1.MediaRelationSchema, required: true },
    parent: { type: AnimeRelationSchema, default: undefined },
    manga: { type: _mangaSchema_1.MangaRelationSchema, default: undefined },
    source: { type: String, enum: types_1.MediaSourceArray, default: undefined },
    title: { type: _mediaSchema_1.MediaTitleSchema, required: true },
    synopsis: { type: String, default: undefined },
    date: { type: _mediaSchema_1.MediaDateSchema, default: undefined },
    status: { type: String, enum: types_1.MediaStatusArray, default: undefined },
    trailer: { type: String, default: undefined },
    format: { type: String, enum: types_1.AnimeFormatArray, required: true },
    vf: { type: Boolean, default: undefined },
    episodes: { type: AnimeEpisodeSchema, default: undefined },
    adult: { type: Boolean, default: undefined },
    explicit: { type: Boolean, default: undefined },
    cover: { type: _mediaSchema_1.MediaRelationSchema, default: undefined },
    banner: { type: _mediaSchema_1.MediaRelationSchema, default: undefined },
    genres: { type: [String], enum: types_1.MediaGenresArray, default: undefined },
    links: { type: [_mediaSchema_1.MediaLinkSchema], default: undefined },
    companys: { type: [_mediaSchema_1.MediaRelationSchema], default: undefined },
    staffs: { type: [_personSchema_1.PersonRelationSchema], default: undefined },
    characters: { type: [_characterSchema_1.CharacterRelationSchema], default: undefined },
    tracks: { type: [_mediaSchema_1.MediaRelationSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
