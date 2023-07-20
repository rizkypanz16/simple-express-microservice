// swagger.js

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Customer API",
      version: "1.0.0",
      description: "Customer API documentation",
    },
    servers: [
      {
        url: "http://localhost:8001", // Replace with your server URL
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Replace with the path to your API route files
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use("/", swaggerUi.serve, swaggerUi.setup(specs));
};
