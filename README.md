# TodoApp Fullstack

TodoApp Fullstack is a Next.js application designed for task management with support for internationalization and a modern UI. It utilizes various libraries and tools to enhance functionality and user experience.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Using Docker](#using-docker)
- [Scripts](#scripts)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with **Clerk**
- Task management functionality
- Internationalization support using **i18next**
- Modern UI with **styled-components** and **Tailwind CSS**
- Type checking with **TypeScript**

## Technologies

- **Next.js**: React framework for server-side rendering and static site generation
- **Clerk**: Authentication and user management
- **Prisma**: ORM for database management
- **Axios**: Promise-based HTTP client for making requests
- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **i18next**: Internationalization framework for JavaScript

## Getting Started

To get a local copy up and running, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todoapp_fullstack.git
   cd todoapp_fullstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   Ensure your database is set up and accessible. Update the Prisma configuration in `prisma/schema.prisma` if necessary.

4. **Run the application**
   - For development mode:
     ```bash
     npm run dev
     ```
   - For production build:
     ```bash
     npm run build
     npm start
     ```

## Using Docker

To run TodoApp Fullstack using Docker:

1. **Build the Docker image**
   ```bash
   docker build -t todoapp_fullstack .
   ```

2. **Run the Docker container**
   ```bash
   docker run -p 3000:3000 todoapp_fullstack
   ```

3. **Access the application**
   Open your web browser and navigate to `http://localhost:3000`.

4. **Stop the Docker container**
   Use `CTRL + C` in the terminal or:
   ```bash
   docker ps
   docker stop <container_id>
   ```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm run lint`: Run ESLint for code linting

## Development

During development, you can use the following commands:

- `npm run dev`: Start the development server with hot-reloading
- `npm run lint`: Run ESLint to check for code quality and style issues

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).