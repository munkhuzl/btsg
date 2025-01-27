import {model, Schema } from "mongoose";

const userSchema = new Schema ({
    userId: String,
    name: String,
    email:{
        type:String,
        required:[true, "please provide an email"],
        unique:[true, "email exist"]
    },
    password:{
        type:String,
        required:[true, "please provide an password"],
        unique:false,
    },
    createdAt:Date,
    updatedAt: Date,
    lastName:String,
    firstName:String,
    phoneNumber:String

})
export const UserModel = model("usermodels", userSchema);