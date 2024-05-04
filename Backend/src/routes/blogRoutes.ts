import { Hono } from "hono";
import { authMiddlware } from "../middlewares/authMiddlware";
import { blogPost, editPost, getPostById, getPostInBluk } from "../controllers/blogController";


const blogRoutes = new Hono()
blogRoutes.use("/blog", authMiddlware)

blogRoutes.post("/blog", blogPost)
blogRoutes.put("/blog", editPost)
blogRoutes.get("/blog/:id", getPostById)
blogRoutes.get("/blogs/bluk", getPostInBluk)

export default blogRoutes
