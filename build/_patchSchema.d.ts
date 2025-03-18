import { IPatch } from "@actunime/types";
import { Schema } from "mongoose";
export declare const PatchSchema: Schema<IPatch, import("mongoose").Model<IPatch, any, any, any, import("mongoose").Document<unknown, any, IPatch> & import("@actunime/types/_patchType").IPatchRoot<"User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report"> & {
    id: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IPatch, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IPatch>> & import("mongoose").FlatRecord<IPatch> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
