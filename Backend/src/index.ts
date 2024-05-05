import { Hono } from 'hono'
import { cors } from 'hono/cors'
import userRoutes from './routes/userRoutes'
import blogRoutes from './routes/blogRoutes'
import { prisma } from './middlewares/prismaVar'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Varibles: {
    userId: string
  }
}>()

app.use(cors())
app.use("*", prisma)


app.route("/api/v1/user", userRoutes)
app.route("/api/v1", blogRoutes)

export default app
