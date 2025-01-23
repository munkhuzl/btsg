import { ObjectId } from "mongoose";



export const createToken = (user: {_id: string;
    email: string;
    firstName: string;
    lastName:string;
    profile: string;
    sportType:string;
    school:String;
    workPlace:String}) =>
    {
        const JWT_SECRET = process.env.JWT_SECRET;

        if(!JWT_SECRET){
            throw new Error('JWT_Secret is not defined');

        }

        const options = {
            expiresIn: '3h',
        }
        const token = jwt.sign(payload, JWT_SECRET, options);
        return token
    }