import { IPerson } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const PersonRelationSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
}, {
    id: string;
    role?: string | null | undefined;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id: string;
    role?: string | null | undefined;
}>> & import("mongoose").FlatRecord<{
    id: string;
    role?: string | null | undefined;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PersonModel: Model<IPerson, {}, {}, {}, import("mongoose").Document<unknown, {}, IPerson> & import("@actunime/types/_personType").IPersonRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=_personModel.d.ts.map