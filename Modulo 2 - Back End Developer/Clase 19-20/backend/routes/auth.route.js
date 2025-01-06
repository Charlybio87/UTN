import express from 'express'
import { registerController, loginController, verifyEmailController, resendVerifyEmailController} from '../controllers/auth.controller.js';


const authRouter = express.Router()

authRouter.post('/register', registerController)
authRouter.post("/login", loginController)
authRouter.get("/verify-email", verifyEmailController)
authRouter.post("/resend-verify-email", resendVerifyEmailController)


export default authRouter

