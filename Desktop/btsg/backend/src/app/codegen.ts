import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql", 
  generates: {
    "/backend/src/app/generated/index.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../types#Context", // Ensure the path is correct
        makeResolverTypeCallable: true,
        maybeValue: "T",
      },
    },
  },
};

export default config;
