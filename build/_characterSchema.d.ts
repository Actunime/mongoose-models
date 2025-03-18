import { ICharacter } from "@actunime/types";
import { Schema } from "mongoose";
export declare const CharacterSchema: Schema<ICharacter, import("mongoose").Model<ICharacter, any, any, any, import("mongoose").Document<unknown, any, ICharacter> & import("@actunime/types/_characterType").ICharacterRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ICharacter, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<ICharacter>> & import("mongoose").FlatRecord<ICharacter> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CharacterRelationSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
