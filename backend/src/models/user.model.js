/**
 * User Model
 * 
 * Defines the schema for user authentication and profile data.
 * Used for registration, login, and session management.
 * 
 * @module models/user
 */

import mongoose, { Schema } from "mongoose";

const userScheme = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        token: { type: String }
    }
)

const User = mongoose.model("User", userScheme);

export { User }