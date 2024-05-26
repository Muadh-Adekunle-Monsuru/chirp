
# Chirp

Chirp is a microblogging site built with the MERN stack (MongoDB, Express, React, Node.js). This README provides details about the technologies used in this project.

## Table of Contents

- [Dependencies](#dependencies)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [DevDependencies](#devdependencies)
  - [Frontend](#frontend-dev)
  - [Backend](#backend-dev)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Dependencies

### Frontend

- **@reduxjs/toolkit**: The official, recommended way to write Redux logic for React. It provides a powerful set of tools for managing global state.
- **@tanstack/react-query**: A powerful data-fetching and state management tool for React, allowing for easy and efficient handling of server-state in your application.
- **axios**: A promise-based HTTP client for making requests to the server. It is used for handling API requests.
- **date-fns**: A modern JavaScript date utility library for parsing, formatting, and manipulating dates.
- **framer-motion**: A production-ready motion library for React. It allows you to create animations and gestures with ease.
- **lottie-react**: A library to render Adobe After Effects animations as React components, using the Bodymovin library.
- **react**: A JavaScript library for building user interfaces. It is the core library of the frontend.
- **react-dom**: This package serves as the entry point of the DOM-related rendering paths. It is used alongside React.
- **react-redux**: Official React bindings for Redux, used for managing the application's state.
- **unique-names-generator**: A utility for generating unique names, useful for creating random usernames or other unique identifiers.

### Backend

- **cors**: A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`, which is essential for managing sensitive configurations.
- **express**: A fast, unopinionated, minimalist web framework for Node.js, used for building the backend API.
- **mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a straightforward, schema-based solution to model your application data.
- **nodemon**: A utility that monitors for any changes in your source and automatically restarts your server. Perfect for development.
- **vercel**: A platform for frontend frameworks and static sites, built to integrate with headless content, commerce, or database APIs.

## DevDependencies

### Frontend

- **@types/react**: TypeScript type definitions for React.
- **@types/react-dom**: TypeScript type definitions for React DOM.
- **@typescript-eslint/eslint-plugin**: An ESLint plugin which provides lint rules for TypeScript codebases.
- **@typescript-eslint/parser**: A parser that allows ESLint to lint TypeScript code.
- **@vitejs/plugin-react**: Vite plugin to handle React specific transformations.
- **autoprefixer**: A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.
- **eslint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
- **eslint-plugin-react-hooks**: An ESLint plugin to enforce rules of hooks in React.
- **eslint-plugin-react-refresh**: An ESLint plugin to enable React Refresh for hot reloading during development.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **tailwindcss**: A utility-first CSS framework for rapidly building custom user interfaces.
- **typescript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **vite**: A next-generation, blazing-fast frontend tool and dev server.

### Backend

- **vercel**: Listed here again for managing deployments specifically for the backend.

## Installation

To install the dependencies for both the frontend and backend, run:

```bash
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

## Usage

To start the development server for both the frontend and backend, run:

```bash
# Start frontend
cd client
npm start

# Start backend
cd ../server
npm run dev
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.

---

