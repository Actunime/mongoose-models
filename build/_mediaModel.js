"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withSchema = exports.MediaLinkSchema = exports.MediaImageSchema = exports.MediaDateSchema = exports.MediaTitleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MediaTitleSchema = new mongoose_1.Schema({
    default: {
        type: String,
        required: true,
        // unique: true,
        index: "text",
        trim: true,
    },
    alias: { type: [String], trim: true, default: undefined },
}, { _id: false });
const DateSchema = new mongoose_1.Schema({
    year: {
        type: Number,
        required: false, // L'année est facultative
        min: 0 // Optionnel : éviter des valeurs négatives
    },
    month: {
        type: Number,
        required: false, // Le mois est facultatif
        min: 1,
        max: 12
    },
    day: {
        type: Number,
        required: false, // Le jour est facultatif
        min: 1,
        max: 31
    },
    hour: {
        type: Number,
        required: false, // Heure facultative
        min: 0,
        max: 23
    },
    minute: {
        type: Number,
        required: false, // Minute facultative
        min: 0,
        max: 59
    }
}, { _id: false });
exports.MediaDateSchema = new mongoose_1.Schema({
    start: { type: DateSchema, required: false },
    end: { type: DateSchema, required: false },
}, { _id: false });
exports.MediaImageSchema = new mongoose_1.Schema({
    cover: { type: String },
    banner: { type: String },
}, { _id: false });
exports.MediaLinkSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
}, { _id: false });
exports.withSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
}, { _id: false, toJSON: { virtuals: true } });
