/**
 * Meeting Model
 * 
 * Stores meeting history and session data.
 * Tracks which users participated in which meetings.
 * 
 * @module models/meeting
 */

import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema({
  user_id: { type: String },
  meetingCode: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
});

const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };
