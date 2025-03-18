"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaSchema_1 = require("./_mediaSchema");
const CompanySchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    type: { type: String, enum: types_1.CompanyTypeArray, required: true },
    name: { type: _mediaSchema_1.MediaNameSchema, required: true },
    description: { type: String, default: undefined },
    links: { type: [_mediaSchema_1.MediaLinkSchema], default: undefined },
    logo: { type: _mediaSchema_1.MediaRelationSchema, default: undefined },
    createdDate: { type: _mediaSchema_1.DateSchema, default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
