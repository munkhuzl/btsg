import {Schema, model, models} from 'mongoose';

export type User = {
    _id: string;
    email: string;
    firstName: string;
    lastName:string;
    profile: string;
    sportType:string;
    school:String;
    workPlace:String
};

const UserSchema = new Schema<User>(
    {
        email: {
            type:String,
            required: true,
            unique:true,
        },
        firstName: {
            type:String,
            required: true,
        },
        profile:{
            type: String,
        },
        sportType:{
            type:String,
        },
        school:{
            type: String
        },
        workPlace:{
            type: String,
        }
    },
    {
        timestamps: true,
      }
);
export const UserModel = models.User || model<User>('User', UserSchema);