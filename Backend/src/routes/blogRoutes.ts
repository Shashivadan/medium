import { Hono } from "hono";
import { authMiddlware } from "../middlewares/authMiddlware";


const blogRoutes = new Hono()

blogRoutes.use("/blog", authMiddlware)

blogRoutes.post("/blog")
blogRoutes.put("/blog")
blogRoutes.get("/blog/:id")
blogRoutes.get("/blog/bluk")

export default blogRoutes
