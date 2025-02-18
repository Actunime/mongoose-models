import { ICompany } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const withCompanySchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
    toJSON: {
        virtuals: true;
    };
}, {
    id?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    id?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CompanyModel: Model<ICompany, {}, {}, {}, import("mongoose").Document<unknown, {}, ICompany> & ICompany & Required<{
    _id: Schema.Types.ObjectId;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=_companyModel.d.ts.map