const TelegramBot = require("node-telegram-bot-api");
const port = 500;
const host = "0.0.0.0";
const externalUrl = "https://expense-wiki.herokuapp.com/";
const token = process.env.TOKEN;

bot = new TelegramBot(token, { webHook: { port : port, host : host } });
bot.setWebHook(externalUrl + ':500/bot' + token);

bot.on("message", msg => {
  if (msg.text == "/start") {
    bot.sendMessage(msg.chat.id, "Привет!");
  } 
});
