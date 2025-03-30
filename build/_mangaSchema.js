import { MangaFormatArray, MediaSourceArray, MediaStatusArray, } from '@actunime/types';
import { genPublicID } from '@actunime/utils';
import { Schema } from 'mongoose';
import { MediaDateSchema, MediaLinkSchema, MediaRelationSchema, MediaTitleSchema, } from './_mediaSchema';
import { PersonRelationSchema } from './_personSchema';
import { CharacterRelationSchema } from './_characterSchema';
const MangaChapterVolumesSchema = new Schema({
    airing: { type: Number, default: undefined },
    nextAiringDate: { type: MediaDateSchema, default: undefined },
    total: { type: Number, default: undefined },
}, { _id: false });
export const MangaRelationSchema = new Schema({
    id: { type: String, required: true },
    label: { type: String, default: undefined },
}, { _id: false });
export const MangaSchema = new Schema({
    id: { type: String, unique: true, default: () => genPublicID(5) },
    groupe: { type: MediaRelationSchema, required: true },
    parent: { type: MangaRelationSchema, default: undefined },
    title: { type: MediaTitleSchema, required: true },
    date: { type: MediaDateSchema, default: undefined },
    synopsis: { type: String, default: undefined },
    source: { type: String, enum: MediaSourceArray, default: undefined },
    format: { type: String, enum: MangaFormatArray, default: undefined },
    vf: { type: Boolean, default: undefined },
    trailer: { type: String, default: undefined },
    genres: { type: [String], default: undefined },
    status: { type: String, enum: MediaStatusArray, default: undefined },
    chapters: { type: MangaChapterVolumesSchema, default: undefined },
    volumes: { type: MangaChapterVolumesSchema, default: undefined },
    adult: { type: Boolean, default: undefined },
    explicit: { type: Boolean, default: undefined },
    links: { type: [MediaLinkSchema], default: undefined },
    cover: { type: [MediaRelationSchema], default: undefined },
    banner: { type: [MediaRelationSchema], default: undefined },
    companys: { type: [MediaRelationSchema], default: undefined },
    staffs: { type: [PersonRelationSchema], default: undefined },
    characters: { type: [CharacterRelationSchema], default: undefined },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true, id: false });
