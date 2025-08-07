# Wander Wise

**Wander Wise** is a modern, production-ready full-stack React application built using **React Router**, **TypeScript**, and **TailwindCSS**, focused on high performance and scalability. It offers a streamlined developer experience with server-side rendering, hot module replacement, and seamless deployment options including Docker.


## Features

-  Server-side rendering
-  Hot Module Replacement (HMR)
-  Asset bundling and optimization
-  Data loading and mutations
-  TypeScript by default
-  TailwindCSS for styling

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Conclusion

Wander Wise is designed to deliver both a powerful development experience and a seamless user experience in production. Whether you’re building for desktop browsers or deploying globally with Docker, this project gives you everything you need to get started quickly with modern full-stack React development.

