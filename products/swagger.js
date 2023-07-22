// swagger.js

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Products API",
      version: "1.0.0",
      description: "Products API documentation",
    },
    servers: [
      {
        url: "http://localhost:8002",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));
};
