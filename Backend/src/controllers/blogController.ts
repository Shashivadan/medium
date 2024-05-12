import { Prisma } from "@prisma/client/edge";
import { Context } from "hono";
import { z } from "zod";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const blogSchema = z.object({
  title: z.string().min(4),
  content: z.string(),
});
type TypeBlogPost = z.infer<typeof blogSchema>;

export async function blogPost(c: Context) {
  try {
    const prisma = c.get("prisma");
    const { title, content }: TypeBlogPost = await c.req.json();
    const userId: string = c.get("userId");
    if (!title || !content || !userId)
      return c.json({ messagae: "data is not provide" }, 403);
    const { success } = blogSchema.safeParse({
      title,
      content,
    });
    if (!success) return c.json({ message: "unacctpelable" }, 403);
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId: userId,
      },
      select: {
        id: true,
        user: {
          select: {
            username: true,
            id: true,
          },
        },
      },
    });
    if (!newPost) {
      return c.json({ message: "Post Not Created" }, 403);
    }
    return c.json({ post: newPost }, 202);
  } catch (error: unknown) {
    return c.json({ message: "Internal Server Error :" + error }, 500);
  }
}

const editPostSchema = blogSchema.partial().extend({ id: z.string() });
type EditPostType = z.infer<typeof editPostSchema>;

export async function editPost(c: Context) {
  try {
    const prisma = c.get("prisma");
    const userId = c.get("userId");

    const { title, content, id }: EditPostType = await c.req.json();
    if (!title || !content || !id)
      return c.json({ message: "plase Provide Data" }, 403);

    const { success } = editPostSchema.safeParse({
      title,
      content,
      id,
    });

    if (!success) return c.json({ message: "unacctpelable" }, 403);
    const updatePost = await prisma.post.update({
      where: {
        authorId: userId,
        id: id,
      },
      data: {
        title,
        content,
      },
      select: {
        id: true,
        user: {
          select: {
            username: true,
            id: true,
          },
        },
      },
    });
    if (!updatePost) return c.json({ message: "Post Is Not Updated" });
    return c.json({ post: updatePost }, 202);
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      return c.json({ message: "plase provide vaild data" }, 500);
    return c.json({ message: `Intenal Server Error : ${error}` }, 500);
  }
}

export async function getPostById(c: Context) {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    // const prisma = c.get("prisma");
    const id: string = c.req.param("id");
    if (!id) return c.json({ message: "Provide Post Id" }, 403);
    const post = await prisma.post.findUnique({
      where: { id },
      select: {
        title: true,
        content: true,
        id: true,
        createdAt: true,
        published: true,
        user: {
          select: {
            username: true,
            id: true,
          },
        },
      },
    });
    return c.json({ post }, 202);
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      return c.json({ message: "Provide Current Id" }, 500);
    return c.json({ message: "Internal Server Error" }, 500);
  }
}

export async function getPostInBluk(c: Context) {
  try {
    const prisma = c.get("prisma");
    const posts = await prisma.post.findMany({
      where: {},
      select: {
        title: true,
        content: true,
        id: true,
        createdAt: true,
        published: true,
        user: {
          select: {
            username: true,
            id: true,
          },
        },
      },
    });
    return c.json({ posts });
  } catch (error: unknown) {
    return c.json({ message: "Internal Server Error" });
  }
}
