import {connect} from 'mongoose';

export const connectToDB= async () =>{
    await connect(process.env.MONGO_URI!);
}