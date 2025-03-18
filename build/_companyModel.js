"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const CompanySchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    type: { type: String, enum: types_1.CompanyTypeArray, required: true },
    name: { type: _mediaModel_1.MediaNameSchema, required: true },
    description: { type: String, default: undefined },
    links: { type: [_mediaModel_1.MediaLinkSchema], default: undefined },
    logo: { type: _mediaModel_1.MediaRelationSchema, default: undefined },
    createdDate: { type: _mediaModel_1.DateSchema, default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
exports.CompanyModel = mongoose_1.models.Company || (0, mongoose_1.model)("Company", CompanySchema);
