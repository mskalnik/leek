import { Client, Message } from 'discord.js';
import { config } from 'dotenv';

export class Bot {
  constructor(protected client: Client) {
    config();
  }

  public async start() {
    this.client.once('ready', () => {
      console.log(`[INFO] ${this.client.user?.username} started...`);
    });

    this.client.on('messageCreate', async (message: Message) => {
      this.joke(message);
    });

    this.client.login(process.env.TOKEN);
  }

  private joke(message: Message) {
    const parserMessage = message.content.toLocaleLowerCase();
    const pun = `i'm`;

    if (parserMessage.includes(pun)) {
      parserMessage
        .split(pun)
        .filter(Boolean)
        .map((it) => message.reply(`Hi ${it}`))
        ;
    }
  }
}
