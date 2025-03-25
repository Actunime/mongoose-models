import { IPerson } from "@actunime/types";
import { Schema } from "mongoose";
export declare const PersonSchema: Schema<IPerson, import("mongoose").Model<IPerson, any, any, any, import("mongoose").Document<unknown, any, IPerson> & import("@actunime/types").IPersonRoot & import("@actunime/types").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IPerson, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IPerson>> & import("mongoose").FlatRecord<IPerson> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PersonRelationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
