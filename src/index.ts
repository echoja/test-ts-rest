import { createExpressEndpoints, initServer } from "@ts-rest/express";
import express from "express";
import bodyParser from "body-parser";
import { contract } from "./contract";
import { generateOpenApi } from "@ts-rest/open-api";
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const s = initServer();
const router = s.router(contract, {
  getUser: async (args) => {
    console.log(args, args);
    return {
      status: 200,
      body: {
        id: "123e4567-e89b-12d3-a456-426614174000",
        name: "John Doe",
        phoneNumber: "555-555-5555",
      },
    };
  },
});

createExpressEndpoints(contract, router, app);

const openApiDocument = generateOpenApi(contract, {
  info: {
    title: "Posts API",
    version: "1.0.0",
  },
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiDocument));

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
