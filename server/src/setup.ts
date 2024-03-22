import { Elysia } from "elysia";
import { logger } from "@grotto/logysia";
import { connect } from "mongoose";
import { swagger } from "@elysiajs/swagger";
import { AuthController,WebinarController,InternshipController} from "./controllers";
import {cors} from "@elysiajs/cors"
const app = new Elysia();

await connect(
  "mongodb+srv://siva:siva@cluster0.8mvie.mongodb.net/learner?retryWrites=true&w=majority"
)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

  app.use(cors(
    {
      origin: ["https://www.learnerpro.in", "http://localhost:4000"],
      credentials: true,      
    }
  ))

app.use(
  logger({
    logIP: true,
  })
);

// swagger
app.use(
  swagger({
    path: "/docs",
    documentation: {
      info: {
        title: "Learner API",
        version: "1.0.0",
      },
      
    },
  })
);

// adding routes
app.use(AuthController)
app.use(WebinarController)
app.use(InternshipController)

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
