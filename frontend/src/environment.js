/**
 * Environment Configuration
 * 
 * This file manages the API server URL for the NeoMeet application.
 * It supports both development and production environments.
 * 
 * @author Rauneet Singh
 */

// Use environment variable for API URL, fallback to deployed backend
const server = process.env.REACT_APP_API_URL || "https://neomeet.onrender.com";

export default server;
