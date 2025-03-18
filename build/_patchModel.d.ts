import { IPatch } from "@actunime/types";
import { Model } from "mongoose";
export declare const PatchModel: Model<IPatch, {}, {}, {}, import("mongoose").Document<unknown, {}, IPatch> & import("@actunime/types/_patchType").IPatchRoot<"User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report"> & {
    id: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
