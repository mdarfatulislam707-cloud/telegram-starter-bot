import { InlineKeyboard } from "grammy"

const ADMIN = "@Arfatvai8090"

export function registerCommands(bot) {

  bot.command("start", async (ctx) => {
    const keyboard = new InlineKeyboard()
      .text("💵 Sell Option", "sell")
      .row()
      .text("🆘 Help Line", "help")

    await ctx.reply(
      `🤝 ভাই সেল গ্রুপ থেকে আপনাকে স্বাগতম!

সবাই সততা এবং বিশ্বাসের সাথে লেনদেন করবেন।

💵 লেনদেনের সীমা: $1 - $100

⚠️ সতর্কতা:
কোনো থার্ড পার্টির সাথে লেনদেন করবেন না।
নিয়ম ভঙ্গ করলে অ্যাডমিন ব্যবস্থা নিতে পারবেন।

নিচের মেনু থেকে অপশন নির্বাচন করুন:`,
      { reply_markup: keyboard }
    )
  })

  bot.callbackQuery("sell", async (ctx) => {
    await ctx.answerCallbackQuery()

    const keyboard = new InlineKeyboard()
      .text("🔗 Binance UID", "uid")
      .row()
      .text("🌐 TRC20", "trc20")
      .row()
      .text("🔙 Back", "back")

    await ctx.reply("আপনার ডলার গ্রহণের মাধ্যম নির্বাচন করুন:", {
      reply_markup: keyboard
    })
  })

  bot.callbackQuery(["uid", "trc20"], async (ctx) => {
    await ctx.answerCallbackQuery()

    const method = ctx.callbackQuery.data === "uid"
      ? "Binance UID"
      : "TRC20"

    await ctx.reply(
      `আপনি ${method} নির্বাচন করেছেন।

আপনার ${method} তথ্য এবং ডলারের পরিমাণ লিখুন।

উদাহরণ:
Amount: 10
UID: আপনার UID

লেনদেনের তথ্য অ্যাডমিন যাচাই করবেন।`
    )
  })

  bot.callbackQuery("help", async (ctx) => {
    await ctx.answerCallbackQuery()

    await ctx.reply(
      `🆘 ভাই সেল Help Line

যেকোনো সমস্যায় যোগাযোগ করুন:

👤 Admin: ${ADMIN}

সতর্ক থাকুন। অপরিচিত কারো সাথে লেনদেন করবেন না।`
    )
  })

  bot.callbackQuery("back", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply("মূল মেনুতে ফিরতে /start লিখুন।")
  })

  bot.command("help", (ctx) => {
    ctx.reply(`🆘 Help Line: ${ADMIN}`)
  })

  bot.command("ping", (ctx) => ctx.reply("Bot is running ✅"))

  bot.command("id", (ctx) =>
    ctx.reply(`Your ID: ${ctx.from?.id}`)
  )
    }
