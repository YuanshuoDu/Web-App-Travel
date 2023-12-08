import express from 'express';

import { signinController, signupController, changePasswordController } from "../controllers/userController.js";

const router = express.Router()

router.post("/signin", signinController)
router.post("/signup", signupController)
router.post('/changePassword', changePasswordController);

export default router;