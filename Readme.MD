## API Template Repository [In Progress] 

### Introduction

This template aims to facilitate the initial development of structure and essential configurations for an application using Node.js, Express, MongoDB as the database and Mongoose as the Object-Document Mapper (ODM). The project follow principles such as Clean Code, Clean Architecture, Dependency Injection and SOLID for example.

In each sublayer, there is a text file explaining briefly its purpose, some context and an example os implementation.

In the configuration sublayer (src > infrastructure > config), there are already configured files for the Express server, the express app and validation of environment variables.

#### Remember, this repository serves as a base for creating your applications, allowing you to modify and add new technologies, concepts, and whatever else is needed to scale for example, authentication, addition of asyncronous processing (queues) and caching.

### Technologies

- Node.js: JavaScript runtime environment
- Express: Web framework for Node.js
- MongoDB: NoSQL database
- Mongoose: Elegant MongoDB object modeling for Node.js
- Other Tecnologies: List any additional technologies used in your project.

### Getting Started

- Prerequisited

Node.js (Version 20.11.0 or higher)
NPM (Node Package Manager) or yarn

To get started with the project, follow these steps:

1. Clone the Repository

    First, clone the template repository to your local machine:
    ```shell
    git clone https://github.com/reishenrique/api-template-repository.git
    cd project-directory
    ```

2. Install Dependencies

    Navigate to the project directory and install dependencies:
    ```shell
    npm install
    # or 
    yarn install
    ```

3. Set Up Environment Variables

    Create a `.env` file in the root directory and configure environment varibles:
    ```shell
    PORT=3000
    DATABASE_URL="mongodb://localhost:27017/mydatabase"

    # Add other necessary environment varibles
    ```

    Adjust `DATABASE_URL` acoording to your MongoDB configuration

4. Run the Application

    Start the application
    ```shell
    npm start 
    # or
    yarn start
    ```

    The server will start at `http://localhost:3000`

### Customize and Extend

Feel free to costumize and extend the project according to your application's requirements:

- Implement authentication: Add user authentication using JWT or similar library
- Add asynchronous processing (queues): Integrate libraries like Bull.js or SQS for handling background jobs.
- Implement caching: Use Redis or similar solutions for caching data and improving performance

### Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and cline it locally
2. Create a new branch for yout feature or bug fix.
3. Open a pull request with a detailed description of your changes.

### License

This project is licensed under the MIT License