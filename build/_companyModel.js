"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = exports.withCompanySchema = void 0;
const types_1 = require("@actunime/types");
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const _imageModel_1 = require("./_imageModel");
const CompanySchema = new mongoose_1.Schema({
    id: { type: String, default: () => (0, utils_1.genPublicID)(5) },
    isVerified: { type: Boolean, default: false },
    isPreAdded: { type: Boolean, default: false },
    name: { type: String, required: true, unique: true, index: "text" },
    type: { type: String, enum: types_1.CompanyTypeArray, default: undefined },
    links: { type: [_mediaModel_1.MediaLinkSchema], default: undefined },
    logo: { type: _imageModel_1.withImage, default: undefined },
    createdDate: { type: Date, default: undefined },
}, { timestamps: true, id: false });
exports.withCompanySchema = new mongoose_1.Schema({
    id: { type: String },
}, { _id: false, toJSON: { virtuals: true } });
exports.CompanyModel = mongoose_1.models.Company || (0, mongoose_1.model)("Company", CompanySchema);
