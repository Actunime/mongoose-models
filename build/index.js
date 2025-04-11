// src/_activitySchema.ts
import {
  ActivityActionArray,
  TargetPathArray,
  ActivityTypeArray
} from "@actunime/types";
import { genPublicID } from "@actunime/utils";
import { Schema as Schema2 } from "mongoose";

// src/_mediaSchema.ts
import { Schema } from "mongoose";
var MediaTitleSchema = new Schema(
  {
    original: { type: String, trim: true, required: true },
    normal: { type: String, trim: true, required: true },
    alias: { type: [String], default: void 0 }
  },
  { _id: false }
);
MediaTitleSchema.index(
  { default: "text", normal: "text", alias: "text" },
  { weights: { normal: 3, default: 2, alias: 1 } }
);
var MediaNameSchema = MediaTitleSchema;
var DateSchema = new Schema(
  {
    year: {
      type: Number,
      min: 0,
      // Optionnel : éviter des valeurs négatives,
      default: void 0
    },
    month: {
      type: Number,
      min: 1,
      max: 12,
      default: void 0
    },
    day: {
      type: Number,
      min: 1,
      max: 31,
      default: void 0
    },
    hours: {
      type: Number,
      min: 0,
      max: 23,
      default: void 0
    },
    minutes: {
      type: Number,
      min: 0,
      max: 59,
      default: void 0
    },
    seconds: {
      type: Number,
      min: 0,
      max: 59,
      default: void 0
    }
  },
  { _id: false }
);
var MediaDateSchema = new Schema(
  {
    start: { type: DateSchema, required: false },
    end: { type: DateSchema, required: false }
  },
  { _id: false }
);
var MediaLinkSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true }
  },
  { _id: false }
);
var MediaRelationSchema = new Schema(
  {
    id: { type: String, required: true }
  },
  { _id: false }
);

// src/_activitySchema.ts
var ActivityTargetSchema = new Schema2(
  {
    id: { type: String, required: true },
    path: { type: String, enum: TargetPathArray, required: true }
  },
  { _id: false }
);
var ActivitySchema = new Schema2(
  {
    id: { type: String, unique: true, default: () => genPublicID(8) },
    type: { type: String, enum: ActivityTypeArray, required: true },
    action: { type: String, enum: ActivityActionArray, required: true },
    targets: { type: [ActivityTargetSchema], required: true, default: void 0 },
    author: { type: MediaRelationSchema, default: void 0 },
    params: { type: Object, default: void 0 }
  },
  { timestamps: true, id: false }
);

// src/_animeSchema.ts
import {
  AnimeFormatArray,
  MediaSourceArray as MediaSourceArray2,
  MediaStatusArray as MediaStatusArray2,
  MediaGenresArray
} from "@actunime/types";
import { genPublicID as genPublicID5 } from "@actunime/utils";
import { Schema as Schema6 } from "mongoose";

// src/_characterSchema.ts
import {
  CharacterGenderArray,
  CharacterRoleArray,
  CharacterSpeciesArray
} from "@actunime/types";
import { genPublicID as genPublicID3 } from "@actunime/utils";
import { Schema as Schema4 } from "mongoose";

// src/_personSchema.ts
import { PersonRoleArray } from "@actunime/types";
import { genPublicID as genPublicID2 } from "@actunime/utils";
import { Schema as Schema3 } from "mongoose";
var PersonSchema = new Schema3(
  {
    id: { type: String, unique: true, default: () => genPublicID2(5) },
    name: { type: MediaNameSchema, required: true },
    birthDate: { type: DateSchema, default: void 0 },
    deathDate: { type: DateSchema, default: void 0 },
    description: { type: String, default: void 0 },
    avatar: { type: MediaRelationSchema, default: void 0 },
    links: { type: [MediaLinkSchema], default: void 0 },
    isGroupe: { type: Boolean, default: void 0 },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true, id: false }
);
var PersonRelationSchema = new Schema3(
  {
    id: { type: String, required: true },
    role: { type: String, enum: PersonRoleArray, default: void 0 }
  },
  { _id: false }
);

// src/_characterSchema.ts
var CharacterSchema = new Schema4(
  {
    id: { type: String, unique: true, default: () => genPublicID3(5) },
    name: MediaNameSchema,
    age: { type: Number, default: void 0 },
    birthDate: { type: DateSchema, default: void 0 },
    gender: { type: String, enum: CharacterGenderArray, default: void 0 },
    species: { type: String, enum: CharacterSpeciesArray, default: void 0 },
    description: { type: String, default: void 0 },
    avatar: { type: MediaRelationSchema, default: void 0 },
    actors: { type: [PersonRelationSchema], default: void 0 },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true, id: false }
);
var CharacterRelationSchema = new Schema4(
  {
    id: { type: String, required: true },
    role: { type: String, enum: CharacterRoleArray, default: void 0 }
  },
  { _id: false }
);

// src/_mangaSchema.ts
import {
  MangaFormatArray,
  MediaSourceArray,
  MediaStatusArray
} from "@actunime/types";
import { genPublicID as genPublicID4 } from "@actunime/utils";
import { Schema as Schema5 } from "mongoose";
var MangaChapterVolumesSchema = new Schema5(
  {
    airing: { type: Number, default: void 0 },
    nextAiringDate: { type: MediaDateSchema, default: void 0 },
    total: { type: Number, default: void 0 }
  },
  { _id: false }
);
var MangaRelationSchema = new Schema5(
  {
    id: { type: String, required: true },
    label: { type: String, default: void 0 }
  },
  { _id: false }
);
var MangaSchema = new Schema5(
  {
    id: { type: String, unique: true, default: () => genPublicID4(5) },
    groupe: { type: MediaRelationSchema, required: true },
    parent: { type: MangaRelationSchema, default: void 0 },
    title: { type: MediaTitleSchema, required: true },
    date: { type: MediaDateSchema, default: void 0 },
    synopsis: { type: String, default: void 0 },
    source: { type: String, enum: MediaSourceArray, default: void 0 },
    format: { type: String, enum: MangaFormatArray, default: void 0 },
    vf: { type: Boolean, default: void 0 },
    trailer: { type: String, default: void 0 },
    genres: { type: [String], default: void 0 },
    status: { type: String, enum: MediaStatusArray, default: void 0 },
    chapters: { type: MangaChapterVolumesSchema, default: void 0 },
    volumes: { type: MangaChapterVolumesSchema, default: void 0 },
    adult: { type: Boolean, default: void 0 },
    explicit: { type: Boolean, default: void 0 },
    links: { type: [MediaLinkSchema], default: void 0 },
    cover: { type: [MediaRelationSchema], default: void 0 },
    banner: { type: [MediaRelationSchema], default: void 0 },
    companys: { type: [MediaRelationSchema], default: void 0 },
    staffs: { type: [PersonRelationSchema], default: void 0 },
    characters: { type: [CharacterRelationSchema], default: void 0 },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true, id: false }
);

// src/_animeSchema.ts
var AnimeEpisodeSchema = new Schema6(
  {
    airing: { type: Number, default: void 0 },
    nextAiringDate: { type: DateSchema, default: void 0 },
    total: { type: Number, default: void 0 },
    durationMinutes: { type: Number, default: void 0 }
  },
  { _id: false }
);
var AnimeRelationSchema = new Schema6(
  {
    id: { type: String, required: true },
    label: { type: String, default: void 0 }
  },
  { _id: false }
);
var AnimeSchema = new Schema6(
  {
    id: { type: String, unique: true, default: () => genPublicID5(8) },
    groupe: { type: MediaRelationSchema, required: true },
    parent: { type: AnimeRelationSchema, default: void 0 },
    manga: { type: MangaRelationSchema, default: void 0 },
    source: { type: String, enum: MediaSourceArray2, default: void 0 },
    title: { type: MediaTitleSchema, required: true },
    synopsis: { type: String, default: void 0 },
    date: { type: MediaDateSchema, default: void 0 },
    status: { type: String, enum: MediaStatusArray2, default: void 0 },
    trailer: { type: String, default: void 0 },
    format: { type: String, enum: AnimeFormatArray, required: true },
    vf: { type: Boolean, default: void 0 },
    episodes: { type: AnimeEpisodeSchema, default: void 0 },
    adult: { type: Boolean, default: void 0 },
    explicit: { type: Boolean, default: void 0 },
    cover: { type: MediaRelationSchema, default: void 0 },
    banner: { type: MediaRelationSchema, default: void 0 },
    genres: { type: [String], enum: MediaGenresArray, default: void 0 },
    links: { type: [MediaLinkSchema], default: void 0 },
    companys: { type: [MediaRelationSchema], default: void 0 },
    staffs: { type: [PersonRelationSchema], default: void 0 },
    characters: { type: [CharacterRelationSchema], default: void 0 },
    tracks: { type: [MediaRelationSchema], default: void 0 },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true, id: false }
);

// src/_companySchema.ts
import { CompanyTypeArray } from "@actunime/types";
import { genPublicID as genPublicID6 } from "@actunime/utils";
import { Schema as Schema7 } from "mongoose";
var CompanySchema = new Schema7(
  {
    id: { type: String, unique: true, default: () => genPublicID6(5) },
    type: { type: String, enum: CompanyTypeArray, required: true },
    name: { type: MediaNameSchema, required: true },
    description: { type: String, default: void 0 },
    links: { type: [MediaLinkSchema], default: void 0 },
    logo: { type: MediaRelationSchema, default: void 0 },
    createdDate: { type: DateSchema, default: void 0 },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true, id: false }
);

// src/_groupeSchema.ts
import { genPublicID as genPublicID7 } from "@actunime/utils";
import { Schema as Schema8 } from "mongoose";
var GroupeSchema = new Schema8(
  {
    id: { type: String, unique: true, default: () => genPublicID7(5) },
    name: MediaNameSchema,
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true, id: false, toJSON: { virtuals: true } }
);

// src/_imageSchema.ts
import { Schema as Schema9 } from "mongoose";
import { ImageLabelArray, TargetPathArray as TargetPathArray2 } from "@actunime/types";
import { genPublicID as genPublicID8 } from "@actunime/utils";
var ImageSchema = new Schema9(
  {
    id: { type: String, unique: true, default: () => genPublicID8(5) },
    label: { type: String, enum: ImageLabelArray, required: true },
    target: { type: MediaRelationSchema, default: void 0 },
    targetPath: { type: String, enum: TargetPathArray2, required: true },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true, id: false }
);

// src/_patchSchema.ts
import {
  TargetPathArray as TargetPathArray3,
  PatchStatusArray,
  PatchTypeArray
} from "@actunime/types";
import { genPublicID as genPublicID9 } from "@actunime/utils";
import { Schema as Schema10 } from "mongoose";
var PatchSchema = new Schema10(
  {
    id: { type: String, unique: true, default: () => genPublicID9(8) },
    ref: { type: MediaRelationSchema, default: void 0 },
    type: { type: String, enum: PatchTypeArray, required: true },
    status: { type: String, enum: PatchStatusArray, default: "PENDING" },
    target: { type: MediaRelationSchema, required: true },
    targetPath: { type: String, enum: TargetPathArray3, required: true },
    description: { type: String, default: void 0 },
    reason: { type: String, default: void 0 },
    original: { type: Schema10.Types.Mixed, default: void 0 },
    changes: { type: Schema10.Types.Mixed, default: void 0 },
    isChangesUpdated: { type: Boolean, default: void 0 },
    author: { type: MediaRelationSchema, required: true },
    moderator: { type: MediaRelationSchema, default: void 0 }
  },
  { timestamps: true, id: false }
);

// src/_reportSchema.ts
import {
  TargetPathArray as TargetPathArray4,
  ReportStatusArray,
  ReportSubjectArray
} from "@actunime/types";
import { genPublicID as genPublicID10 } from "@actunime/utils";
import { Schema as Schema11 } from "mongoose";
var ReportSchema = new Schema11(
  {
    id: { type: String, unique: true, default: () => genPublicID10(8) },
    status: { type: String, enum: ReportStatusArray, default: "PENDING" },
    target: { type: MediaRelationSchema, required: true },
    targetPath: { type: String, enum: TargetPathArray4, required: true },
    subject: { type: String, enum: ReportSubjectArray, required: true },
    message: { type: String, required: true },
    author: { type: MediaRelationSchema, required: true }
  },
  { timestamps: true, id: false }
);

// src/_trackSchema.ts
import { TrackTypeArray } from "@actunime/types";
import { genPublicID as genPublicID11 } from "@actunime/utils";
import { Schema as Schema12 } from "mongoose";
var TrackSchema = new Schema12(
  {
    id: { type: String, unique: true, default: () => genPublicID11(5) },
    type: { type: String, enum: TrackTypeArray, required: true },
    name: { type: MediaNameSchema, required: true },
    releaseDate: { type: DateSchema, default: void 0 },
    description: { type: String, default: void 0 },
    cover: { type: MediaRelationSchema, default: void 0 },
    artists: { type: [PersonRelationSchema], default: void 0 },
    links: { type: [MediaLinkSchema], default: void 0 },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true, id: false }
);

// src/_userSchema.ts
import { Schema as Schema13 } from "mongoose";
import { genPublicID as genPublicID12 } from "@actunime/utils";
var userSchema = new Schema13(
  {
    id: { type: String, unique: true, default: () => genPublicID12() },
    accountId: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    displayName: { type: String },
    description: { type: String },
    permissions: { type: [String], default: [] },
    avatar: { type: MediaRelationSchema, default: void 0 },
    banner: { type: MediaRelationSchema, default: void 0 },
    options: { type: Schema13.Types.Mixed, default: {} }
  },
  { timestamps: true, id: false }
);
export {
  ActivitySchema,
  AnimeSchema,
  CharacterRelationSchema,
  CharacterSchema,
  CompanySchema,
  DateSchema,
  GroupeSchema,
  ImageSchema,
  MangaRelationSchema,
  MangaSchema,
  MediaDateSchema,
  MediaLinkSchema,
  MediaNameSchema,
  MediaRelationSchema,
  MediaTitleSchema,
  PatchSchema,
  PersonRelationSchema,
  PersonSchema,
  ReportSchema,
  TrackSchema,
  userSchema
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL19hY3Rpdml0eVNjaGVtYS50cyIsICIuLi9zcmMvX21lZGlhU2NoZW1hLnRzIiwgIi4uL3NyYy9fYW5pbWVTY2hlbWEudHMiLCAiLi4vc3JjL19jaGFyYWN0ZXJTY2hlbWEudHMiLCAiLi4vc3JjL19wZXJzb25TY2hlbWEudHMiLCAiLi4vc3JjL19tYW5nYVNjaGVtYS50cyIsICIuLi9zcmMvX2NvbXBhbnlTY2hlbWEudHMiLCAiLi4vc3JjL19ncm91cGVTY2hlbWEudHMiLCAiLi4vc3JjL19pbWFnZVNjaGVtYS50cyIsICIuLi9zcmMvX3BhdGNoU2NoZW1hLnRzIiwgIi4uL3NyYy9fcmVwb3J0U2NoZW1hLnRzIiwgIi4uL3NyYy9fdHJhY2tTY2hlbWEudHMiLCAiLi4vc3JjL191c2VyU2NoZW1hLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge1xyXG4gIElBY3Rpdml0eSxcclxuICBBY3Rpdml0eUFjdGlvbkFycmF5LFxyXG4gIFRhcmdldFBhdGhBcnJheSxcclxuICBBY3Rpdml0eVR5cGVBcnJheSxcclxuICBJQWN0aXZpdHlUYXJnZXQsXHJcbn0gZnJvbSBcIkBhY3R1bmltZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZW5QdWJsaWNJRCB9IGZyb20gXCJAYWN0dW5pbWUvdXRpbHNcIjtcclxuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IE1lZGlhUmVsYXRpb25TY2hlbWEgfSBmcm9tIFwiLi9fbWVkaWFTY2hlbWFcIjtcclxuXHJcbmNvbnN0IEFjdGl2aXR5VGFyZ2V0U2NoZW1hID0gbmV3IFNjaGVtYTxJQWN0aXZpdHlUYXJnZXQ+KFxyXG4gIHtcclxuICAgIGlkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBhdGg6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBUYXJnZXRQYXRoQXJyYXksIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgfSwgeyBfaWQ6IGZhbHNlIH0sXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aXZpdHlTY2hlbWEgPSBuZXcgU2NoZW1hPElBY3Rpdml0eT4oXHJcbiAge1xyXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUsIGRlZmF1bHQ6ICgpID0+IGdlblB1YmxpY0lEKDgpIH0sXHJcbiAgICB0eXBlOiB7IHR5cGU6IFN0cmluZywgZW51bTogQWN0aXZpdHlUeXBlQXJyYXksIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBhY3Rpb246IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBBY3Rpdml0eUFjdGlvbkFycmF5LCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdGFyZ2V0czogeyB0eXBlOiBbQWN0aXZpdHlUYXJnZXRTY2hlbWFdLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBhdXRob3I6IHsgdHlwZTogTWVkaWFSZWxhdGlvblNjaGVtYSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBwYXJhbXM6IHsgdHlwZTogT2JqZWN0LCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSwgaWQ6IGZhbHNlIH0sXHJcbik7IiwgImltcG9ydCB7XG4gIElEYXRlLFxuICBJTWVkaWFEYXRlLFxuICBJTWVkaWFMaW5rLFxuICBJTWVkaWFSZWxhdGlvbixcbiAgSU1lZGlhVGl0bGUsXG59IGZyb20gJ0BhY3R1bmltZS90eXBlcyc7XG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1lZGlhVGl0bGVTY2hlbWEgPSBuZXcgU2NoZW1hPElNZWRpYVRpdGxlPihcbiAge1xuICAgIG9yaWdpbmFsOiB7IHR5cGU6IFN0cmluZywgdHJpbTogdHJ1ZSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBub3JtYWw6IHsgdHlwZTogU3RyaW5nLCB0cmltOiB0cnVlLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGFsaWFzOiB7IHR5cGU6IFtTdHJpbmddLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcbiAgfSxcbiAgeyBfaWQ6IGZhbHNlIH1cbik7XG5cbk1lZGlhVGl0bGVTY2hlbWEuaW5kZXgoXG4gIHsgZGVmYXVsdDogJ3RleHQnLCBub3JtYWw6ICd0ZXh0JywgYWxpYXM6ICd0ZXh0JyB9LFxuICB7IHdlaWdodHM6IHsgbm9ybWFsOiAzLCBkZWZhdWx0OiAyLCBhbGlhczogMSB9IH1cbik7XG5cbmV4cG9ydCB7IE1lZGlhVGl0bGVTY2hlbWEgfTtcbmV4cG9ydCBjb25zdCBNZWRpYU5hbWVTY2hlbWEgPSBNZWRpYVRpdGxlU2NoZW1hO1xuXG5leHBvcnQgY29uc3QgRGF0ZVNjaGVtYSA9IG5ldyBTY2hlbWE8SURhdGU+KFxuICB7XG4gICAgeWVhcjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgbWluOiAwLCAvLyBPcHRpb25uZWwgOiBcdTAwRTl2aXRlciBkZXMgdmFsZXVycyBuXHUwMEU5Z2F0aXZlcyxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIG1vbnRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDEyLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgZGF5OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDMxLFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgaG91cnM6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMjMsXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBtaW51dGVzOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDU5LFxuICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIH0sXG4gICAgc2Vjb25kczoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiA1OSxcbiAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICB9LFxuICB7IF9pZDogZmFsc2UgfVxuKTtcblxuZXhwb3J0IGNvbnN0IE1lZGlhRGF0ZVNjaGVtYSA9IG5ldyBTY2hlbWE8SU1lZGlhRGF0ZT4oXG4gIHtcbiAgICBzdGFydDogeyB0eXBlOiBEYXRlU2NoZW1hLCByZXF1aXJlZDogZmFsc2UgfSxcbiAgICBlbmQ6IHsgdHlwZTogRGF0ZVNjaGVtYSwgcmVxdWlyZWQ6IGZhbHNlIH0sXG4gIH0sXG4gIHsgX2lkOiBmYWxzZSB9XG4pO1xuXG5leHBvcnQgY29uc3QgTWVkaWFMaW5rU2NoZW1hID0gbmV3IFNjaGVtYTxJTWVkaWFMaW5rPihcbiAge1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdHJpbTogdHJ1ZSB9LFxuICAgIHZhbHVlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHRyaW06IHRydWUgfSxcbiAgfSxcbiAgeyBfaWQ6IGZhbHNlIH1cbik7XG5cbmV4cG9ydCBjb25zdCBNZWRpYVJlbGF0aW9uU2NoZW1hID0gbmV3IFNjaGVtYTxJTWVkaWFSZWxhdGlvbj4oXG4gIHtcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIH0sXG4gIHsgX2lkOiBmYWxzZSB9XG4pO1xuIiwgImltcG9ydCB7XHJcbiAgSUFuaW1lLFxyXG4gIElBbmltZUVwaXNvZGUsXHJcbiAgQW5pbWVGb3JtYXRBcnJheSxcclxuICBNZWRpYVNvdXJjZUFycmF5LFxyXG4gIE1lZGlhU3RhdHVzQXJyYXksXHJcbiAgTWVkaWFHZW5yZXNBcnJheVxyXG59IGZyb20gXCJAYWN0dW5pbWUvdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2VuUHVibGljSUQgfSBmcm9tIFwiQGFjdHVuaW1lL3V0aWxzXCI7XHJcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJSZWxhdGlvblNjaGVtYSB9IGZyb20gXCIuL19jaGFyYWN0ZXJTY2hlbWFcIjtcclxuaW1wb3J0IHsgTWFuZ2FSZWxhdGlvblNjaGVtYSB9IGZyb20gXCIuL19tYW5nYVNjaGVtYVwiO1xyXG5pbXBvcnQge1xyXG4gIERhdGVTY2hlbWEsXHJcbiAgTWVkaWFEYXRlU2NoZW1hLFxyXG4gIE1lZGlhTGlua1NjaGVtYSxcclxuICBNZWRpYVJlbGF0aW9uU2NoZW1hLFxyXG4gIE1lZGlhVGl0bGVTY2hlbWEsXHJcbn0gZnJvbSBcIi4vX21lZGlhU2NoZW1hXCI7XHJcbmltcG9ydCB7IFBlcnNvblJlbGF0aW9uU2NoZW1hIH0gZnJvbSBcIi4vX3BlcnNvblNjaGVtYVwiO1xyXG5cclxuY29uc3QgQW5pbWVFcGlzb2RlU2NoZW1hID0gbmV3IFNjaGVtYTxJQW5pbWVFcGlzb2RlPihcclxuICB7XHJcbiAgICBhaXJpbmc6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIG5leHRBaXJpbmdEYXRlOiB7IHR5cGU6IERhdGVTY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgdG90YWw6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGR1cmF0aW9uTWludXRlczogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gIH0sXHJcbiAgeyBfaWQ6IGZhbHNlIH0sXHJcbik7XHJcblxyXG5jb25zdCBBbmltZVJlbGF0aW9uU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBsYWJlbDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gIH0sXHJcbiAgeyBfaWQ6IGZhbHNlIH0sXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgQW5pbWVTY2hlbWEgPSBuZXcgU2NoZW1hPElBbmltZT4oXHJcbiAge1xyXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUsIGRlZmF1bHQ6ICgpID0+IGdlblB1YmxpY0lEKDgpIH0sXHJcbiAgICBncm91cGU6IHsgdHlwZTogTWVkaWFSZWxhdGlvblNjaGVtYSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBhcmVudDogeyB0eXBlOiBBbmltZVJlbGF0aW9uU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIG1hbmdhOiB7IHR5cGU6IE1hbmdhUmVsYXRpb25TY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgc291cmNlOiB7IHR5cGU6IFN0cmluZywgZW51bTogTWVkaWFTb3VyY2VBcnJheSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICB0aXRsZTogeyB0eXBlOiBNZWRpYVRpdGxlU2NoZW1hLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgc3lub3BzaXM6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGRhdGU6IHsgdHlwZTogTWVkaWFEYXRlU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIHN0YXR1czogeyB0eXBlOiBTdHJpbmcsIGVudW06IE1lZGlhU3RhdHVzQXJyYXksIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgdHJhaWxlcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgZm9ybWF0OiB7IHR5cGU6IFN0cmluZywgZW51bTogQW5pbWVGb3JtYXRBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHZmOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgZXBpc29kZXM6IHsgdHlwZTogQW5pbWVFcGlzb2RlU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGFkdWx0OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgZXhwbGljaXQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBjb3ZlcjogeyB0eXBlOiBNZWRpYVJlbGF0aW9uU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGJhbm5lcjogeyB0eXBlOiBNZWRpYVJlbGF0aW9uU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGdlbnJlczogeyB0eXBlOiBbU3RyaW5nXSwgZW51bTogTWVkaWFHZW5yZXNBcnJheSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBsaW5rczogeyB0eXBlOiBbTWVkaWFMaW5rU2NoZW1hXSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBjb21wYW55czogeyB0eXBlOiBbTWVkaWFSZWxhdGlvblNjaGVtYV0sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgc3RhZmZzOiB7IHR5cGU6IFtQZXJzb25SZWxhdGlvblNjaGVtYV0sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgY2hhcmFjdGVyczogeyB0eXBlOiBbQ2hhcmFjdGVyUmVsYXRpb25TY2hlbWFdLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIHRyYWNrczogeyB0eXBlOiBbTWVkaWFSZWxhdGlvblNjaGVtYV0sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgaXNWZXJpZmllZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlLCBpZDogZmFsc2UgfSxcclxuKTsiLCAiaW1wb3J0IHtcclxuICBDaGFyYWN0ZXJHZW5kZXJBcnJheSxcclxuICBDaGFyYWN0ZXJSb2xlQXJyYXksXHJcbiAgQ2hhcmFjdGVyU3BlY2llc0FycmF5LFxyXG4gIElDaGFyYWN0ZXIsXHJcbn0gZnJvbSBcIkBhY3R1bmltZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZW5QdWJsaWNJRCB9IGZyb20gXCJAYWN0dW5pbWUvdXRpbHNcIjtcclxuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IFBlcnNvblJlbGF0aW9uU2NoZW1hIH0gZnJvbSBcIi4vX3BlcnNvblNjaGVtYVwiO1xyXG5pbXBvcnQgeyBEYXRlU2NoZW1hLCBNZWRpYVJlbGF0aW9uU2NoZW1hLCBNZWRpYU5hbWVTY2hlbWEgfSBmcm9tIFwiLi9fbWVkaWFTY2hlbWFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFyYWN0ZXJTY2hlbWEgPSBuZXcgU2NoZW1hPElDaGFyYWN0ZXI+KFxyXG4gIHtcclxuICAgIGlkOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiB0cnVlLCBkZWZhdWx0OiAoKSA9PiBnZW5QdWJsaWNJRCg1KSB9LFxyXG4gICAgbmFtZTogTWVkaWFOYW1lU2NoZW1hLFxyXG4gICAgYWdlOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBiaXJ0aERhdGU6IHsgdHlwZTogRGF0ZVNjaGVtYSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBnZW5kZXI6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBDaGFyYWN0ZXJHZW5kZXJBcnJheSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBzcGVjaWVzOiB7IHR5cGU6IFN0cmluZywgZW51bTogQ2hhcmFjdGVyU3BlY2llc0FycmF5LCBkZWZhdWx0OiB1bmRlZmluZWQsIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgYXZhdGFyOiB7IHR5cGU6IE1lZGlhUmVsYXRpb25TY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgYWN0b3JzOiB7IHR5cGU6IFtQZXJzb25SZWxhdGlvblNjaGVtYV0sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgaXNWZXJpZmllZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlLCBpZDogZmFsc2UgfSxcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFyYWN0ZXJSZWxhdGlvblNjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcm9sZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IENoYXJhY3RlclJvbGVBcnJheSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgfSxcclxuICB7IF9pZDogZmFsc2UgfSxcclxuKTsiLCAiaW1wb3J0IHsgSVBlcnNvbiwgUGVyc29uUm9sZUFycmF5IH0gZnJvbSBcIkBhY3R1bmltZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZW5QdWJsaWNJRCB9IGZyb20gXCJAYWN0dW5pbWUvdXRpbHNcIjtcclxuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IERhdGVTY2hlbWEsIE1lZGlhTGlua1NjaGVtYSwgTWVkaWFSZWxhdGlvblNjaGVtYSwgTWVkaWFOYW1lU2NoZW1hIH0gZnJvbSBcIi4vX21lZGlhU2NoZW1hXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGVyc29uU2NoZW1hID0gbmV3IFNjaGVtYTxJUGVyc29uPihcclxuICB7XHJcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSwgZGVmYXVsdDogKCkgPT4gZ2VuUHVibGljSUQoNSkgfSxcclxuICAgIG5hbWU6IHsgdHlwZTogTWVkaWFOYW1lU2NoZW1hLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgYmlydGhEYXRlOiB7IHR5cGU6IERhdGVTY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgZGVhdGhEYXRlOiB7IHR5cGU6IERhdGVTY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGF2YXRhcjogeyB0eXBlOiBNZWRpYVJlbGF0aW9uU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGxpbmtzOiB7IHR5cGU6IFtNZWRpYUxpbmtTY2hlbWFdLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGlzR3JvdXBlOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgaXNWZXJpZmllZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlLCBpZDogZmFsc2UgfSxcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQZXJzb25SZWxhdGlvblNjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcm9sZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFBlcnNvblJvbGVBcnJheSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgfSxcclxuICB7IF9pZDogZmFsc2UgfSxcclxuKTsiLCAiaW1wb3J0IHtcclxuICBJTWFuZ2EsXHJcbiAgSU1hbmdhQ2hhcHRlclZvbHVtcyxcclxuICBNYW5nYUZvcm1hdEFycmF5LFxyXG4gIE1lZGlhU291cmNlQXJyYXksXHJcbiAgTWVkaWFTdGF0dXNBcnJheSxcclxufSBmcm9tICdAYWN0dW5pbWUvdHlwZXMnO1xyXG5pbXBvcnQgeyBnZW5QdWJsaWNJRCB9IGZyb20gJ0BhY3R1bmltZS91dGlscyc7XHJcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHtcclxuICBNZWRpYURhdGVTY2hlbWEsXHJcbiAgTWVkaWFMaW5rU2NoZW1hLFxyXG4gIE1lZGlhUmVsYXRpb25TY2hlbWEsXHJcbiAgTWVkaWFUaXRsZVNjaGVtYSxcclxufSBmcm9tICcuL19tZWRpYVNjaGVtYSc7XHJcbmltcG9ydCB7IFBlcnNvblJlbGF0aW9uU2NoZW1hIH0gZnJvbSAnLi9fcGVyc29uU2NoZW1hJztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyUmVsYXRpb25TY2hlbWEgfSBmcm9tICcuL19jaGFyYWN0ZXJTY2hlbWEnO1xyXG5cclxuY29uc3QgTWFuZ2FDaGFwdGVyVm9sdW1lc1NjaGVtYSA9IG5ldyBTY2hlbWE8SU1hbmdhQ2hhcHRlclZvbHVtcz4oXHJcbiAge1xyXG4gICAgYWlyaW5nOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBuZXh0QWlyaW5nRGF0ZTogeyB0eXBlOiBNZWRpYURhdGVTY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgdG90YWw6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICB9LFxyXG4gIHsgX2lkOiBmYWxzZSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTWFuZ2FSZWxhdGlvblNjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgbGFiZWw6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICB9LFxyXG4gIHsgX2lkOiBmYWxzZSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTWFuZ2FTY2hlbWEgPSBuZXcgU2NoZW1hPElNYW5nYT4oXHJcbiAge1xyXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUsIGRlZmF1bHQ6ICgpID0+IGdlblB1YmxpY0lEKDUpIH0sXHJcbiAgICBncm91cGU6IHsgdHlwZTogTWVkaWFSZWxhdGlvblNjaGVtYSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBhcmVudDogeyB0eXBlOiBNYW5nYVJlbGF0aW9uU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIHRpdGxlOiB7IHR5cGU6IE1lZGlhVGl0bGVTY2hlbWEsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBkYXRlOiB7IHR5cGU6IE1lZGlhRGF0ZVNjaGVtYSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBzeW5vcHNpczogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgc291cmNlOiB7IHR5cGU6IFN0cmluZywgZW51bTogTWVkaWFTb3VyY2VBcnJheSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBmb3JtYXQ6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBNYW5nYUZvcm1hdEFycmF5LCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIHZmOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgdHJhaWxlcjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgZ2VucmVzOiB7IHR5cGU6IFtTdHJpbmddLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIHN0YXR1czogeyB0eXBlOiBTdHJpbmcsIGVudW06IE1lZGlhU3RhdHVzQXJyYXksIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgY2hhcHRlcnM6IHsgdHlwZTogTWFuZ2FDaGFwdGVyVm9sdW1lc1NjaGVtYSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICB2b2x1bWVzOiB7IHR5cGU6IE1hbmdhQ2hhcHRlclZvbHVtZXNTY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgYWR1bHQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBleHBsaWNpdDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGxpbmtzOiB7IHR5cGU6IFtNZWRpYUxpbmtTY2hlbWFdLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGNvdmVyOiB7IHR5cGU6IFtNZWRpYVJlbGF0aW9uU2NoZW1hXSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBiYW5uZXI6IHsgdHlwZTogW01lZGlhUmVsYXRpb25TY2hlbWFdLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGNvbXBhbnlzOiB7IHR5cGU6IFtNZWRpYVJlbGF0aW9uU2NoZW1hXSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBzdGFmZnM6IHsgdHlwZTogW1BlcnNvblJlbGF0aW9uU2NoZW1hXSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBjaGFyYWN0ZXJzOiB7IHR5cGU6IFtDaGFyYWN0ZXJSZWxhdGlvblNjaGVtYV0sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgaXNWZXJpZmllZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlLCBpZDogZmFsc2UgfVxyXG4pO1xyXG4iLCAiaW1wb3J0IHsgSUNvbXBhbnksIENvbXBhbnlUeXBlQXJyYXkgfSBmcm9tIFwiQGFjdHVuaW1lL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdlblB1YmxpY0lEIH0gZnJvbSBcIkBhY3R1bmltZS91dGlsc1wiO1xyXG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgRGF0ZVNjaGVtYSwgTWVkaWFMaW5rU2NoZW1hLCBNZWRpYVJlbGF0aW9uU2NoZW1hLCBNZWRpYU5hbWVTY2hlbWEgfSBmcm9tIFwiLi9fbWVkaWFTY2hlbWFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb21wYW55U2NoZW1hID0gbmV3IFNjaGVtYTxJQ29tcGFueT4oXHJcbiAge1xyXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUsIGRlZmF1bHQ6ICgpID0+IGdlblB1YmxpY0lEKDUpIH0sXHJcbiAgICB0eXBlOiB7IHR5cGU6IFN0cmluZywgZW51bTogQ29tcGFueVR5cGVBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIG5hbWU6IHsgdHlwZTogTWVkaWFOYW1lU2NoZW1hLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGxpbmtzOiB7IHR5cGU6IFtNZWRpYUxpbmtTY2hlbWFdLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGxvZ286IHsgdHlwZTogTWVkaWFSZWxhdGlvblNjaGVtYSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBjcmVhdGVkRGF0ZTogeyB0eXBlOiBEYXRlU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGlzVmVyaWZpZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSwgaWQ6IGZhbHNlIH0sXHJcbik7IiwgImltcG9ydCB7IElHcm91cGUgfSBmcm9tIFwiQGFjdHVuaW1lL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdlblB1YmxpY0lEIH0gZnJvbSBcIkBhY3R1bmltZS91dGlsc1wiO1xyXG5pbXBvcnQgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgTWVkaWFOYW1lU2NoZW1hIH0gZnJvbSBcIi4vX21lZGlhU2NoZW1hXCI7XHJcblxyXG5leHBvcnQgY29uc3QgR3JvdXBlU2NoZW1hID0gbmV3IFNjaGVtYTxJR3JvdXBlPihcclxuICB7XHJcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSwgZGVmYXVsdDogKCkgPT4gZ2VuUHVibGljSUQoNSkgfSxcclxuICAgIG5hbWU6IE1lZGlhTmFtZVNjaGVtYSxcclxuICAgIGlzVmVyaWZpZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSwgaWQ6IGZhbHNlLCB0b0pTT046IHsgdmlydHVhbHM6IHRydWUgfSB9LFxyXG4pOyIsICJpbXBvcnQgeyBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHsgSUltYWdlLCBJbWFnZUxhYmVsQXJyYXksIFRhcmdldFBhdGhBcnJheSB9IGZyb20gXCJAYWN0dW5pbWUvdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2VuUHVibGljSUQgfSBmcm9tIFwiQGFjdHVuaW1lL3V0aWxzXCI7XHJcbmltcG9ydCB7IE1lZGlhUmVsYXRpb25TY2hlbWEgfSBmcm9tIFwiLi9fbWVkaWFTY2hlbWFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVNjaGVtYSA9IG5ldyBTY2hlbWE8SUltYWdlPihcclxuICB7XHJcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSwgZGVmYXVsdDogKCkgPT4gZ2VuUHVibGljSUQoNSkgfSxcclxuICAgIGxhYmVsOiB7IHR5cGU6IFN0cmluZywgZW51bTogSW1hZ2VMYWJlbEFycmF5LCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdGFyZ2V0OiB7IHR5cGU6IE1lZGlhUmVsYXRpb25TY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgdGFyZ2V0UGF0aDogeyB0eXBlOiBTdHJpbmcsIGVudW06IFRhcmdldFBhdGhBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGlzVmVyaWZpZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSwgaWQ6IGZhbHNlIH0sXHJcbik7XHJcbiIsICJpbXBvcnQge1xyXG4gIFRhcmdldFBhdGhBcnJheSxcclxuICBQYXRjaFN0YXR1c0FycmF5LFxyXG4gIFBhdGNoVHlwZUFycmF5LFxyXG4gIElQYXRjaFxyXG59IGZyb20gXCJAYWN0dW5pbWUvdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2VuUHVibGljSUQgfSBmcm9tIFwiQGFjdHVuaW1lL3V0aWxzXCI7XHJcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBNZWRpYVJlbGF0aW9uU2NoZW1hIH0gZnJvbSBcIi4vX21lZGlhU2NoZW1hXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGF0Y2hTY2hlbWEgPSBuZXcgU2NoZW1hPElQYXRjaD4oXHJcbiAge1xyXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nLCB1bmlxdWU6IHRydWUsIGRlZmF1bHQ6ICgpID0+IGdlblB1YmxpY0lEKDgpIH0sXHJcbiAgICByZWY6IHsgdHlwZTogTWVkaWFSZWxhdGlvblNjaGVtYSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICB0eXBlOiB7IHR5cGU6IFN0cmluZywgZW51bTogUGF0Y2hUeXBlQXJyYXksIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBzdGF0dXM6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBQYXRjaFN0YXR1c0FycmF5LCBkZWZhdWx0OiAnUEVORElORycgfSxcclxuICAgIHRhcmdldDogeyB0eXBlOiBNZWRpYVJlbGF0aW9uU2NoZW1hLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgdGFyZ2V0UGF0aDogeyB0eXBlOiBTdHJpbmcsIGVudW06IFRhcmdldFBhdGhBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICByZWFzb246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIG9yaWdpbmFsOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBjaGFuZ2VzOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5NaXhlZCwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBpc0NoYW5nZXNVcGRhdGVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgYXV0aG9yOiB7IHR5cGU6IE1lZGlhUmVsYXRpb25TY2hlbWEsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBtb2RlcmF0b3I6IHsgdHlwZTogTWVkaWFSZWxhdGlvblNjaGVtYSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUsIGlkOiBmYWxzZSB9XHJcbik7IiwgImltcG9ydCB7XHJcbiAgSVJlcG9ydCxcclxuICBUYXJnZXRQYXRoQXJyYXksXHJcbiAgUmVwb3J0U3RhdHVzQXJyYXksXHJcbiAgUmVwb3J0U3ViamVjdEFycmF5LFxyXG59IGZyb20gXCJAYWN0dW5pbWUvdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2VuUHVibGljSUQgfSBmcm9tIFwiQGFjdHVuaW1lL3V0aWxzXCI7XHJcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5pbXBvcnQgeyBNZWRpYVJlbGF0aW9uU2NoZW1hIH0gZnJvbSBcIi4vX21lZGlhU2NoZW1hXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUmVwb3J0U2NoZW1hID0gbmV3IFNjaGVtYTxJUmVwb3J0PihcclxuICB7XHJcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSwgZGVmYXVsdDogKCkgPT4gZ2VuUHVibGljSUQoOCkgfSxcclxuICAgIHN0YXR1czogeyB0eXBlOiBTdHJpbmcsIGVudW06IFJlcG9ydFN0YXR1c0FycmF5LCBkZWZhdWx0OiBcIlBFTkRJTkdcIiB9LFxyXG4gICAgdGFyZ2V0OiB7IHR5cGU6IE1lZGlhUmVsYXRpb25TY2hlbWEsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICB0YXJnZXRQYXRoOiB7IHR5cGU6IFN0cmluZywgZW51bTogVGFyZ2V0UGF0aEFycmF5LCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgc3ViamVjdDogeyB0eXBlOiBTdHJpbmcsIGVudW06IFJlcG9ydFN1YmplY3RBcnJheSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIG1lc3NhZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgYXV0aG9yOiB7IHR5cGU6IE1lZGlhUmVsYXRpb25TY2hlbWEsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUsIGlkOiBmYWxzZSB9LFxyXG4pOyIsICJpbXBvcnQgeyBJVHJhY2ssIFRyYWNrVHlwZUFycmF5IH0gZnJvbSBcIkBhY3R1bmltZS90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZW5QdWJsaWNJRCB9IGZyb20gXCJAYWN0dW5pbWUvdXRpbHNcIjtcclxuaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IERhdGVTY2hlbWEsIE1lZGlhTGlua1NjaGVtYSwgTWVkaWFSZWxhdGlvblNjaGVtYSwgTWVkaWFOYW1lU2NoZW1hIH0gZnJvbSBcIi4vX21lZGlhU2NoZW1hXCI7XHJcbmltcG9ydCB7IFBlcnNvblJlbGF0aW9uU2NoZW1hIH0gZnJvbSBcIi4vX3BlcnNvblNjaGVtYVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYWNrU2NoZW1hID0gbmV3IFNjaGVtYTxJVHJhY2s+KFxyXG4gIHtcclxuICAgIGlkOiB7IHR5cGU6IFN0cmluZywgdW5pcXVlOiB0cnVlLCBkZWZhdWx0OiAoKSA9PiBnZW5QdWJsaWNJRCg1KSB9LFxyXG4gICAgdHlwZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFRyYWNrVHlwZUFycmF5LCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgbmFtZTogeyB0eXBlOiBNZWRpYU5hbWVTY2hlbWEsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICByZWxlYXNlRGF0ZTogeyB0eXBlOiBEYXRlU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBjb3ZlcjogeyB0eXBlOiBNZWRpYVJlbGF0aW9uU2NoZW1hLCBkZWZhdWx0OiB1bmRlZmluZWQgfSxcclxuICAgIGFydGlzdHM6IHsgdHlwZTogW1BlcnNvblJlbGF0aW9uU2NoZW1hXSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBsaW5rczogeyB0eXBlOiBbTWVkaWFMaW5rU2NoZW1hXSwgZGVmYXVsdDogdW5kZWZpbmVkIH0sXHJcbiAgICBpc1ZlcmlmaWVkOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUsIGlkOiBmYWxzZSB9LFxyXG4pO1xyXG4iLCAiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IGdlblB1YmxpY0lEIH0gZnJvbSBcIkBhY3R1bmltZS91dGlsc1wiO1xyXG5pbXBvcnQgeyBNZWRpYVJlbGF0aW9uU2NoZW1hIH0gZnJvbSBcIi4vX21lZGlhU2NoZW1hXCI7XHJcbmltcG9ydCB7IElVc2VyIH0gZnJvbSBcIkBhY3R1bmltZS90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hPElVc2VyPihcclxuICB7XHJcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSwgZGVmYXVsdDogKCkgPT4gZ2VuUHVibGljSUQoKSB9LFxyXG4gICAgYWNjb3VudElkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHVzZXJuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gICAgZGlzcGxheU5hbWU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIHBlcm1pc3Npb25zOiB7IHR5cGU6IFtTdHJpbmddLCBkZWZhdWx0OiBbXSB9LFxyXG4gICAgYXZhdGFyOiB7IHR5cGU6IE1lZGlhUmVsYXRpb25TY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgYmFubmVyOiB7IHR5cGU6IE1lZGlhUmVsYXRpb25TY2hlbWEsIGRlZmF1bHQ6IHVuZGVmaW5lZCB9LFxyXG4gICAgb3B0aW9uczogeyB0eXBlOiBTY2hlbWEuVHlwZXMuTWl4ZWQsIGRlZmF1bHQ6IHt9IH1cclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSwgaWQ6IGZhbHNlIH0sXHJcbik7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBQTtBQUFBLEVBRUU7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLE9BRUs7QUFDUCxTQUFTLG1CQUFtQjtBQUM1QixTQUFTLFVBQUFBLGVBQWM7OztBQ0R2QixTQUFTLGNBQWM7QUFFdkIsSUFBTSxtQkFBbUIsSUFBSTtBQUFBLEVBQzNCO0FBQUEsSUFDRSxVQUFVLEVBQUUsTUFBTSxRQUFRLE1BQU0sTUFBTSxVQUFVLEtBQUs7QUFBQSxJQUNyRCxRQUFRLEVBQUUsTUFBTSxRQUFRLE1BQU0sTUFBTSxVQUFVLEtBQUs7QUFBQSxJQUNuRCxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLE9BQVU7QUFBQSxFQUM5QztBQUFBLEVBQ0EsRUFBRSxLQUFLLE1BQU07QUFDZjtBQUVBLGlCQUFpQjtBQUFBLEVBQ2YsRUFBRSxTQUFTLFFBQVEsUUFBUSxRQUFRLE9BQU8sT0FBTztBQUFBLEVBQ2pELEVBQUUsU0FBUyxFQUFFLFFBQVEsR0FBRyxTQUFTLEdBQUcsT0FBTyxFQUFFLEVBQUU7QUFDakQ7QUFHTyxJQUFNLGtCQUFrQjtBQUV4QixJQUFNLGFBQWEsSUFBSTtBQUFBLEVBQzVCO0FBQUEsSUFDRSxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUE7QUFBQSxNQUNMLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFB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QUFBLEVBQ0EsRUFBRSxZQUFZLE1BQU0sSUFBSSxNQUFNO0FBQ2hDOyIsCiAgIm5hbWVzIjogWyJTY2hlbWEiLCAiU2NoZW1hIiwgIk1lZGlhU291cmNlQXJyYXkiLCAiTWVkaWFTdGF0dXNBcnJheSIsICJnZW5QdWJsaWNJRCIsICJTY2hlbWEiLCAiZ2VuUHVibGljSUQiLCAiU2NoZW1hIiwgImdlblB1YmxpY0lEIiwgIlNjaGVtYSIsICJTY2hlbWEiLCAiZ2VuUHVibGljSUQiLCAiU2NoZW1hIiwgImdlblB1YmxpY0lEIiwgImdlblB1YmxpY0lEIiwgIlNjaGVtYSIsICJTY2hlbWEiLCAiZ2VuUHVibGljSUQiLCAiU2NoZW1hIiwgImdlblB1YmxpY0lEIiwgIk1lZGlhU291cmNlQXJyYXkiLCAiTWVkaWFTdGF0dXNBcnJheSIsICJnZW5QdWJsaWNJRCIsICJTY2hlbWEiLCAiU2NoZW1hIiwgImdlblB1YmxpY0lEIiwgImdlblB1YmxpY0lEIiwgIlNjaGVtYSIsICJTY2hlbWEiLCAiZ2VuUHVibGljSUQiLCAiU2NoZW1hIiwgIlRhcmdldFBhdGhBcnJheSIsICJnZW5QdWJsaWNJRCIsICJTY2hlbWEiLCAiZ2VuUHVibGljSUQiLCAiVGFyZ2V0UGF0aEFycmF5IiwgIlRhcmdldFBhdGhBcnJheSIsICJnZW5QdWJsaWNJRCIsICJTY2hlbWEiLCAiU2NoZW1hIiwgImdlblB1YmxpY0lEIiwgIlRhcmdldFBhdGhBcnJheSIsICJUYXJnZXRQYXRoQXJyYXkiLCAiZ2VuUHVibGljSUQiLCAiU2NoZW1hIiwgIlNjaGVtYSIsICJnZW5QdWJsaWNJRCIsICJUYXJnZXRQYXRoQXJyYXkiLCAiZ2VuUHVibGljSUQiLCAiU2NoZW1hIiwgIlNjaGVtYSIsICJnZW5QdWJsaWNJRCIsICJTY2hlbWEiLCAiZ2VuUHVibGljSUQiLCAiU2NoZW1hIiwgImdlblB1YmxpY0lEIl0KfQo=
