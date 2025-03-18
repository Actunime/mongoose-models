"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaRelationSchema = exports.MediaLinkSchema = exports.MediaDateSchema = exports.DateSchema = exports.MediaNameSchema = exports.MediaTitleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MediaTitleSchema = new mongoose_1.Schema({
    default: { type: String, index: "text", trim: true, required: true },
    alias: { type: [String], default: undefined },
}, { _id: false });
exports.MediaNameSchema = exports.MediaTitleSchema;
exports.DateSchema = new mongoose_1.Schema({
    year: {
        type: Number,
        min: 0, // Optionnel : éviter des valeurs négatives,
        default: undefined
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        default: undefined
    },
    day: {
        type: Number,
        min: 1,
        max: 31,
        default: undefined
    },
    hours: {
        type: Number,
        min: 0,
        max: 23,
        default: undefined
    },
    minutes: {
        type: Number,
        min: 0,
        max: 59,
        default: undefined
    },
    seconds: {
        type: Number,
        min: 0,
        max: 59,
        default: undefined
    }
}, { _id: false });
exports.MediaDateSchema = new mongoose_1.Schema({
    start: { type: exports.DateSchema, required: false },
    end: { type: exports.DateSchema, required: false },
}, { _id: false });
exports.MediaLinkSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
}, { _id: false });
exports.MediaRelationSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
}, { _id: false });
