"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaSchema_1 = require("./_mediaSchema");
const GroupeSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    name: _mediaSchema_1.MediaNameSchema,
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
