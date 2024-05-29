import { initContract } from "@ts-rest/core";
import { z } from "zod";

import { extendZodWithOpenApi } from "@anatine/zod-openapi";

extendZodWithOpenApi(z);

const c = initContract();

export const contract = c.router({
  getUser: {
    method: "GET",
    path: "/users/:id",
    description: "Get a user by ID",
    query: z.object({
      limit: z.coerce.number().int().positive().openapi({
        description: "The number of items to return",
        example: 10,
      }),
    }),
    headers: z.object({
      "Authorization": z.string(),
    }),
    metadata: {
      "x-internal-id": "1234",
    },
    // deprecated: true,
    pathParams: z.object({
      id: z.string().openapi({
        description: "The user's ID",
      }),
    }),
    responses: {
      200: z
        .object({
          id: z.string().uuid().openapi({
            title: "Unique ID",
            description: "A UUID generated by the server",
          }),
          name: z.string(),
          phoneNumber: z.string().min(10).openapi({
            description: "US phone numbers only",
            example: "555-555-5555",
          }),
        })
        .openapi({
          title: "User",
          description: "A user schema",
          
        }),
    },
  },
});
