import { Context, Next } from "hono";
import { verify } from "hono/jwt";


export async function authMiddlware(c: Context, next: Next) {
  try {
    const token = c.req.header("token")
    if (!token) {
      return c.json({ message: "Token Is Not Provided" }, 403)
    }
    const decode = await verify(token, c.env.JWT_SECRET)
    if (!decode) {
      return c.json({ error: "unauthized" }, 401)
    }
    c.set("userId", decode.id)
    await next()
  } catch (error) {
    return c.json({ message: "Internal Server Error & unauthized" }, 500)
  }
} 
