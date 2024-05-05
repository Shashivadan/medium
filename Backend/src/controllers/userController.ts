import { Context } from "hono";
import { sign } from "hono/jwt";
import { z } from "zod"



const signUpSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(4),
  email: z.string().email()
})

type SignUpTypes = z.infer<typeof signUpSchema>

export async function signUp(c: Context) {
  try {
    const prisma = c.get("prisma")
    const { username, password, email }: SignUpTypes = await c.req.json()


    const { success } = signUpSchema.safeParse({
      username,
      password,
      email
    })

    if (!success) {
      return c.json({ message: "unaccpteable" }, 403)
    }

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
    c.json({ message: "Interal Server Error" + error }, 500)
  }

}


const signInSchema = signUpSchema.omit({ username: true })
type SingInBodyType = z.infer<typeof signInSchema>




export async function signIn(c: Context) {
  try {
    const prisma = c.get("prisma")
    const { email, password }: SingInBodyType = await c.req.json()
    const { success } = signInSchema.safeParse({ email, password })
    if (!success) return c.json({ message: "give valud schema" }, 403)
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
    console.log(error);

    return c.json({ message: "Interal Server Error" + error }, 403)
  }
}
