import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MovieMania",
      version: "1.0.0",
      description: "API documentation for MovieMania By Alhan",
    },
    servers: [
      {
        url: `${process.env.SITE_URL}:${process.env.PORT}`,
        description: "Local server",
      },
    ],
  },
  apis: ["../routes/reviewRoutes.ts", "../routes/*.ts", "./routes/*.ts"], // Ensure this path is correct
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export default function setupSwagger(app: Express) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  console.log(`Swagger API Docs available at ${process.env.SITE_URL}:${process.env.PORT}/docs`);
}