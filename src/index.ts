import dotenv from "dotenv"
import pino from "pino"

import express, { Request, Response, json } from "express"

import { Context, Telegraf } from "telegraf"

import { generate } from "./utils"
import { Payload } from "./types/Payload"

dotenv.config({
    path: `${ __dirname }/../.env`
})

const PORT = process.env.APP_PORT
const TOKEN = process.env.BOT_TOKEN
const CHAT_ID = process.env.CHAT_ID

const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});

const app = express()
const bot = new Telegraf(TOKEN)

app.use(json())

app.post("*", async (req: Request, res: Response) => {
    const payload = req.body as Payload;

    if (payload && payload.repository && payload.commits) {
        const { text, keyboard } = await generate(payload)

        await bot.telegram.sendMessage(CHAT_ID, text, keyboard)

        logger.info(`Sent commit: \n\n${text}`)
    }

    res.end("OK")
})

app.listen(PORT, () => {
    logger.info(`GitHub Webhook server running on ::${PORT}`)
})

bot.command('chatid', async (ctx: Context) => {
    logger.info(`Chat ID: ${ctx.chat.id}`)

    await ctx.reply(`Chat ID: ${ctx.chat.id}`)
})

bot.launch()