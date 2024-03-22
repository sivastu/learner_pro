import { Elysia, t } from "elysia";

export const LoginDto = t.Object({
  phoneNumber: t.String({
    minLength: 10,
    error: "Invalid phone number",
  }),
  email: t.String({
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    error: "Invalid email",
  }),
image: t.File({
    error: "Image is required",
})

});
