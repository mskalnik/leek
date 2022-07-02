import { Client, Intents } from "discord.js";
import { config } from "dotenv";

export class Bot {
  constructor() {
    config();
  }

  public start() {
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
  }
}
