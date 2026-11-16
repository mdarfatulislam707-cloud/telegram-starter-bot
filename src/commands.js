import { InlineKeyboard } from "grammy"

export function registerCommands(bot) {

  const mainMenu = new InlineKeyboard()
    .text("🟢 BUY", "buy")
    .text("🔴 SELL", "sell")
    .row()
    .text("📋 My Orders", "orders")
    .text("📞 Support", "support")
    .row()
    .text("ℹ️ Help", "help")

  bot.command("start", async (ctx) => {
    await ctx.reply(
      `👋 Welcome to BUY & SELL SERVICE

💱 Digital Order Information Center

নিচের মেনু থেকে একটি অপশন নির্বাচন করুন।

🟢 BUY - Buy information
🔴 SELL - Sell information
📋 My Orders - Order information
📞 Support - Contact Admin`,
      { reply_markup: mainMenu }
    )
  })

  bot.callbackQuery("buy", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      `🟢 BUY INFORMATION

আপনার Buy সংক্রান্ত তথ্য লিখুন।

নিরাপদে অর্ডার যাচাইয়ের জন্য অ্যাডমিনের সঙ্গে যোগাযোগ করুন।

📞 Support: @Arfatvai8090`,
      { reply_markup: new InlineKeyboard().text("🔙 Main Menu", "home") }
    )
  })

  bot.callbackQuery("sell", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      `🔴 SELL INFORMATION

আপনার Sell সংক্রান্ত তথ্য লিখুন।

কোনো পেমেন্ট বা সম্পদ পাঠানোর আগে তথ্য যাচাই করুন।

📞 Support: @Arfatvai8090`,
      { reply_markup: new InlineKeyboard().text("🔙 Main Menu", "home") }
    )
  })

  bot.callbackQuery("orders", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      "📋 ORDER INFORMATION\n\nএখনো কোনো অর্ডার সংরক্ষিত নেই।",
      { reply_markup: new InlineKeyboard().text("🔙 Main Menu", "home") }
    )
  })

  bot.callbackQuery("support", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      "📞 SUPPORT\n\nAdmin: @Arfatvai8090"
    )
  })

  bot.callbackQuery("help", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply(
      "ℹ️ HELP\n\n/start - Main Menu\n/help - Help\n/id - Your ID"
    )
  })

  bot.callbackQuery("home", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply("🏠 MAIN MENU", {
      reply_markup: mainMenu
    })
  })

  bot.command("help", (ctx) =>
    ctx.reply("ব্যবহার: /start দিয়ে মেনু খুলুন।")
  )

  bot.command("id", (ctx) =>
    ctx.reply(`Your ID: ${ctx.from.id}`)
  )

  bot.command("ping", (ctx) =>
    ctx.reply("🟢 Bot is running!")
  )
                    }
