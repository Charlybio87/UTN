import express from 'express'
import { authMiddleware } from '../middlewares/auth.middleware.js'
import { createWorkspaceController } from '../controllers/workspace.controller.js'

const workspaceRouter = express.Router()

workspaceRouter.post("/", authMiddleware, createWorkspaceController)

export default workspaceRouter

