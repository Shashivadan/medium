import { Hono } from "hono";
import { signIn, signUp } from "../controllers/userController";


const userRoutes = new Hono()


userRoutes.post("/signup", signUp)
userRoutes.post("/signin", signIn)



export default userRoutes
