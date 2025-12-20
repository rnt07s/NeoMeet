/**
 * User Routes
 * 
 * API endpoints for user authentication and activity tracking.
 * 
 * Routes:
 * - POST /login - User login
 * - POST /register - User registration
 * - POST /add_to_activity - Add meeting to history
 * - GET /get_all_activity - Get user's meeting history
 * 
 * @module routes/users
 */

import { Router } from "express";
import {
  addToHistory,
  getUserHistory,
  login,
  register,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post(addToHistory);
router.route("/get_all_activity").get(getUserHistory);

export default router;
