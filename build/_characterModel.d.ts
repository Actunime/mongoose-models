import { ICharacter } from "@actunime/types";
import { Model, Schema } from "mongoose";
export declare const CharacterRelationSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
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
export declare const CharacterModel: Model<ICharacter, {}, {}, {}, import("mongoose").Document<unknown, {}, ICharacter> & import("@actunime/types/_characterType").ICharacterRoot & import("@actunime/types/_mediaType").IMedia & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=_characterModel.d.ts.map