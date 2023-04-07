import { Client, Message } from 'discord.js';
import { config } from 'dotenv';

export class Bot {
  constructor(protected client: Client) {
    config();
  }

  public async start() {
    this.client.once('ready', () => {
      const username = this.client.user?.username ?? 'UNKNOWN_USERNAME';
      console.clear();
      console.info(`[INFO] ${username} up and running`);
    });

    this.client.on('messageCreate', async (message: Message) => {
      this.joke(message);
    });

    await this.client.login(process.env.TOKEN);
  }

  private joke(message: Message) {
    const parserMessage = message.content.toLocaleLowerCase();
    const pun = `i'm`;

    if (parserMessage.includes(pun)) {
      return parserMessage
        .split(pun)
        .filter(Boolean)
        .map((it) => message.reply(`Hi ${it}`));
    }
  }
}
