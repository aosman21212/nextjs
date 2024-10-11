# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the Docker image
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

RUN npx prisma generate

# Expose the application port (Next.js default is 3000)
EXPOSE 3000


# Start the Next.js application in development mode
CMD ["npm", "run", "dev"]
