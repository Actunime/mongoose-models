import { ICompany } from "@actunime/types";
import { Schema } from "mongoose";
export declare const CompanySchema: Schema<ICompany, import("mongoose").Model<ICompany, any, any, any, import("mongoose").Document<unknown, any, ICompany> & import("@actunime/types").ICompanyRoot & import("@actunime/types").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ICompany, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ICompany>> & import("mongoose").FlatRecord<ICompany> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
