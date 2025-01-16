import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = gql`
  type Member {
    name: String!
    section: String!
    post: String!
    linkedin: String!
    instagram: String!
    img: String!
    rollNumber: String
    branch: String!
    location: String!
    about: String
  }

  type Query {
    members: [Member]
  }
`;

const resolvers = {
  Query: {
    members: async () => {
      const { profileDetails } = await import(pathToFileURL(path.resolve(__dirname, './data/member_data.mjs')).href);
      return profileDetails;
    },
  },
};

const app = express();
app.use(cors({
  origin: '*', // Allow all origins for development
}));

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startApolloServer().catch((err) => {
  console.error('Error starting Apollo Server:', err);
});
