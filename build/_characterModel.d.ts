import { Model, Schema } from "mongoose";
export declare const withCharacterSchema: Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    _id: false;
    toJSON: {
        virtuals: true;
    };
}, {
    id: string;
    role?: any;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    id: string;
    role?: any;
}>> & import("mongoose").FlatRecord<{
    id: string;
    role?: any;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const CharacterModel: Model<ICharacter, {}, {}, {}, any, any>;
//# sourceMappingURL=_characterModel.d.ts.map