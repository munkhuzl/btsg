import { UserModel } from "../../../models"


export const findUserByEmail: QueryResolvers['findUserByEmail']= async (_, {email})=>{
    const user = await UserModel.findOne({email});
    return user;
};