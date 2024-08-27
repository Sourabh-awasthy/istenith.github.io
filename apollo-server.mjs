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

  type BlogPost {
    id: ID!
    blog_title: String!
    image: String!
    author: String!
    tags: [String!]!
    description: String!
    mdfile: String!
  }

  type Gallery {
    id: ID!
    image: String!
    event: String
    title: String
    desc: String
    set: String
  }

  type Query {
    members: [Member]
    blogPosts: [BlogPost]
    gallery: [Gallery]
  }
`;


const resolvers = {
  Query: {
    members: async () => {
      const { profileDetails } = await import(pathToFileURL(path.resolve(__dirname, './data/member_data.mjs')).href);
      return profileDetails;
    },
    blogPosts: async () => {
      // Implement logic for fetching blogPosts data
      return []; // Placeholder, replace with actual data fetching logic
    },
    gallery: async () => {
      const { data } = await import(pathToFileURL(path.resolve(__dirname, './data/data.mjs')).href);
      return data;
    },
  },
};


const app = express();
app.use(cors());


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
