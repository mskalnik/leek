import { Client, Intents } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('[INFO] Client started...');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
});

client.login(process.env.TOKEN);
