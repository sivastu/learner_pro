import { Elysia, t } from "elysia";
import { LoginDto } from "../types/authTypes";
import { UserModel } from "../models/User";

export const AuthController = new Elysia({ prefix: "/auth" }).post(
  "/login",
  async ({ body, set }) => {
    const { phoneNumber } = body;

    try {
      let userExists = await UserModel.findOne({ phoneNumber });
     
      if (!userExists) {
        userExists = new UserModel({
          phoneNumber: phoneNumber,
        });

        await userExists.save();
      }

      set.status = 200;

      return {
        message: "Logged in successfully",
        data: userExists,
        ok: true,
      };
    } catch (error : any) {
      set.status = 400;
       return {
        message: error.message,
       }
    }
  },
  {
    body: t.Object({
      phoneNumber: t.String({
        minLength: 10,
        error: "Invalid phone number",
      }),
    }),
    detail: {
      tags: ["Auth"],
      responses: {
        200: {
          description: "Logged in successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  }
);
