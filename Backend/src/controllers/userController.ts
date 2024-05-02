import { Context } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
// import { prsima } from "../middlewares/prismaVar";

// const prisma = new PrismaClient({
//   datasourceUrl: env.DATABASE_URL,
// }).$extends(withAccelerate())
//
type SignUpTypes = {
  username: string,
  password: string,
  email: string,
}

export async function signUp(c: Context) {
  try {
    const prisma = c.get("prisma")
    const { username, password, email }: SignUpTypes = await c.req.json()

    const isExists = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if (isExists) {
      return c.json({ message: "user all ready exists" }, 402)
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        username
      },
      select: {
        email: true,
        username: true,
        id: true
      }
    })

    if (!newUser) {
      return c.json({ message: "some thing went worng" }, 401)
    }

    const userId: string = newUser.id

    const token = await sign({ id: userId }, c.env.JWT_SECRET)

    return c.json({
      token,
      user: newUser
    }, 202)

  } catch (error) {
    console.log(error);
    c.json({ message: "Interal Server Error" + error }, 500)
  }

}
type SingInBodyType = {
  email: string,
  password: string

}

export async function signIn(c: Context) {
  try {
    const prisma = c.get("prisma")
    const { email, password }: SingInBodyType = await c.req.json()

    const user = await prisma.user.findUnique({
      where: {
        email,
        password
      },
      select: {
        id: true,
        username: true,
        email: true,
      }
    })
    if (!user) return c.json({ message: "email or password is wornge" }, 403)
    const userId: string = user.id
    const token = await sign({ id: userId }, c.env.JWT_SECRET)
    return c.json({
      user,
      token
    }, 202)
  } catch (error) {
    return c.json({ message: "Interal Server Error" + error }, 403)
  }
}
