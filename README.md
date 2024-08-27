<p align="center"><img src="public/assets/images/logos/iste-logo.webp" width="120px"><h1 align="center"> ISTE-NITH </h1> </p>

## Getting Started
1. Install the required dependencies with 
    ```shell
    npm install
    ```

1. First, run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

#### Used [`concurrently`](https://www.npmjs.com/package/concurrently) to run local development server and GraphQL server.

To test the GraphQL server (Apollo-Server) independently.

```bash
nodemon apollo-server.mjs
```


