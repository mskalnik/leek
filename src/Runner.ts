import { Client, Intents } from 'discord.js';
import { Bot } from './Bot';

const bot = new Bot(
  new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  })
);

bot.start();
