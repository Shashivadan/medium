import { PrismaClient } from "@prisma/client/edge";
import { Context, Next } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";


export async function prisma(c: Context, next: Next) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set("prisma", prisma)
  await next()
}
