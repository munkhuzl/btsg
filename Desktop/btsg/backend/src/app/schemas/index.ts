import { OTPTypeDefs } from "./otp.schema";
import { UsertTypeDef } from "./user.schema";

function mergeTypeDefs(arg0: import("graphql").DocumentNode[]) {
    throw new Error("Function not implemented.");
}
export const typeDefs = mergeTypeDefs([UsertTypeDef,OTPTypeDefs]);
