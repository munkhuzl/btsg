import {ApolloServer} from '@apollo/server';
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
  