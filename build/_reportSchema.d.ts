import { IReport } from "@actunime/types";
import { Schema } from "mongoose";
export declare const ReportSchema: Schema<IReport, import("mongoose").Model<IReport, any, any, any, import("mongoose").Document<unknown, any, IReport> & import("@actunime/types").IReportRoot<"User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report"> & {
    id: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IReport, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IReport>> & import("mongoose").FlatRecord<IReport> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
