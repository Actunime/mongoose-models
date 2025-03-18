import { IReport } from "@actunime/types";
import { Model } from "mongoose";
export declare const ReportModel: Model<IReport, {}, {}, {}, import("mongoose").Document<unknown, {}, IReport> & import("@actunime/types/_reportType").IReportRoot<"User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report"> & {
    id: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=_reportModel.d.ts.map