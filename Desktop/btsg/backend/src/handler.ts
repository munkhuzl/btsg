import { connectToDB } from "./app/utils/connect-to-db";

connectToDB();

const server = new ApolloServer <Context>({
    resolvers,
    typeDefs,
    introspection: true,
  });
  
  export const handler = startServerAndCreateNextHandler<NextRequest, Context>(server, {
    context: async (req) => {
      return { req };
    },
  });
  