FROM node

MAINTAINER Baptiste CROS

# Set the working directory in /app.
WORKDIR /app

# Add node_modules in the environnement variables PATH.
ENV PATH /app/node_modules/.bin:$PATH

# Copy the content of /my-app in container.
COPY my-app ./

# Copy 'package.json' containing all the dependencies in the container.
COPY my-app/package.json ./

# Install the angular CLI.
RUN npm install -g @angular/cli@11

# Install all dependencies.
RUN npm install

# Expose port 4200 for the application.
EXPOSE 4200

# Start the server on localhost.
CMD ng serve --host 0.0.0.0