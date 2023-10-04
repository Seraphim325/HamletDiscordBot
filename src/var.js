import { config } from "dotenv";

config();

export let mutedChanels = {};
export const TOKEN = process.env.DISCORD_TOKEN;
export const CLIENT_ID = process.env.APP_ID;
export const GUILD_ID = process.env.GUILD_ID;