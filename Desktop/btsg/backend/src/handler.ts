import { Context } from "@apollo/client";
import { connectToDB } from "./app/utils/connect-to-db";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from './app/schemas';
import { resolvers } from './app/resolvers/queries';
import { NextRequest } from "next/server";
connectToDB();

const server = new ApolloServer<Context>({
    resolvers,
    typeDefs,
    introspection: true,
  });
  
  export const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
    context: async (req) => {
      return { req };
    },
  });

function startServerAndCreateNextHandler<T, U>(server: ApolloServer<Context>, arg1: { context: (req: any) => Promise<{ req: any; }>; }) {
  throw new Error("Function not implemented.");
}
  