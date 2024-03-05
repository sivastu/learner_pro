import { Elysia, t } from "elysia";
import { LoginDto } from "../types/authTypes";
import { UserModel } from "../models/User";

export const AuthRouter = new Elysia({ prefix: "/auth" }).post(
  "/login",
  async ({ body, set }) => {
    const { phoneNumber } = body;

    try {
      let userExists = await UserModel.findOne({ phoneNumber });

      if (!userExists) {
        userExists = new UserModel({
          phoneNumber: phoneNumber,
          username: "test",
        });

        await userExists.save();
      }

      set.status = 200;

      return {
        message: "Logged in successfully",
      };
    } catch (error) {
      console.log(error);
    }
  },
  {
    body: LoginDto,
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