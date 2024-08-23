// src/config/index.js
import dotenv from 'dotenv';

dotenv.config({ path: './src/config/.env' });

export const MAP_API_TOKEN = process.env.REACT_MAP_API_TOKEN;
