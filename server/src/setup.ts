import { Elysia } from "elysia";
import { AuthRouter, UserRouter } from "./controllers";
import { logger } from "@grotto/logysia";
import { connect } from "mongoose";
import { swagger } from "@elysiajs/swagger";

const app = new Elysia();

await connect(
  "mongodb+srv://siva:siva@cluster0.8mvie.mongodb.net/learner?retryWrites=true&w=majority"
)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

app.use(
  logger({
    logIP: true,
  })
);

// swagger
app.use(
  swagger({
    path: "/docs",
    swaggerOptions: {},
    documentation: {
      info: {
        title: "Pressup API",
        version: "1.0.0",
      },
      tags: [
        { name: "User", description: "User endpoints" },
        { name: "Auth", description: "Authentication endpoints" },
      ],
    },
  })
);

// adding routes
app.use(UserRouter);
app.use(AuthRouter);

app.onError(({ code, error }) => {
  if (code === "VALIDATION") {
    console.log(error.all);
    return {
      status: 400,
      body: error.all,
    };
  }
});

export { app };
