import { Prisma } from "@prisma/client/edge";
import { Context } from "hono";
type TypeBlogPost = {
  title: string,
  content: string
}


export async function blogPost(c: Context) {
  try {
    const prisma = c.get("prisma")
    const { title, content }: TypeBlogPost = await c.req.json()
    const userId: string = c.get("userId")
    if (!title || !content || !userId) return c.json({ messagae: "data is not provide", }, 403)

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId: userId
      },
      select: {
        title: true,
        content: true,
        authorId: true,
        id: true,
      }
    })
    if (!newPost) {
      return c.json({ message: "Post Not Created" }, 403)
    }

    return c.json({ post: newPost }, 202)
  } catch (error: unknown) {
    console.log(error);
    return c.json({ message: "Internal Server Error :" + error }, 500)
  }
}
type EditPostType = TypeBlogPost & { id: string }


export async function editPost(c: Context) {
  try {
    const prisma = c.get("prisma")
    const userId = c.get("userId")

    const { title, content, id }: EditPostType = await c.req.json()
    if (!title || !content || !id) return c.json({ message: "plase Provide Data" }, 403)
    const updatePost = await prisma.post.update({
      where: {
        authorId: userId,
        id: id
      }, data: {
        title,
        content
      },
      select: {
        title: true,
        content: true,
        authorId: true,
        id: true
      }
    })
    if (!updatePost) return c.json({ message: "Post Is Not Updated" })
    return c.json({ post: updatePost }, 202)
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) return c.json({ message: "plase provide vaild data" }, 500)
    return c.json({ message: `Intenal Server Error : ${error}` }, 500)
  }
}


export async function getPostById(c: Context) {
  try {
    const prisma = c.get("prisma")
    const id: string = c.req.param("id")
    if (!id) return c.json({ message: 'Provide Post Id' }, 403)
    const post = await prisma.post.findUnique({ where: { id } })
    return c.json({ post }, 202)
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) return c.json({ message: "Provide Current Id" }, 500)
    return c.json({ message: "Internal Server Error" })
  }
}


export async function getPostInBluk(c: Context) {
  try {
    const prisma = c.get("prisma")
    const posts = await prisma.post.findMany({})
    return c.json({ posts })
  } catch (error: unknown) {

    return c.json({ message: "Internal Server Error" })
  }
}

