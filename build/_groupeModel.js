"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupeModel = void 0;
const utils_1 = require("@actunime/utils");
const mongoose_1 = require("mongoose");
const _mediaModel_1 = require("./_mediaModel");
const GroupeSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, default: () => (0, utils_1.genPublicID)(5) },
    name: _mediaModel_1.MediaNameSchema,
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false, toJSON: { virtuals: true } });
exports.GroupeModel = mongoose_1.models.Groupe || (0, mongoose_1.model)("Groupe", GroupeSchema);
