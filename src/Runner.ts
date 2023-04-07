import { Client, GatewayIntentBits } from 'discord.js';
import { Bot } from './Bot';

(async () => {
  const bot = new Bot(
    new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    })
  );

  await bot.start();
})();
