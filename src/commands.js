import { InlineKeyboard } from "grammy"

// নিজের তথ্য এখানে বসাবে
const ADMIN_USERNAME = "@Arfatvai8090"
const BINANCE_UID = "1254966896"
const BEP20_ADDRESS = "0x1652293fa63b6a514adceadbcc5939b4c72dc5f3"

export function registerCommands(bot) {

  // MAIN MENU
  bot.command("start", async (ctx) => {
    const keyboard = new InlineKeyboard()
      .text("💵 Dollar Sell", "dollar_sell")
      .row()
      .text("📋 Payment Details", "payment_details")
      .row()
      .text("📞 Help & Contact", "help_contact")

    await ctx.reply(
      `💵 Welcome to Dollar Sell!

স্বাগতম ${ctx.from?.first_name ?? "User"}।

এখানে তুমি সহজেই ডলার বিক্রি করতে পারবে।

নিচের অপশন থেকে বেছে নাও।`,
      { reply_markup: keyboard }
    )
  })

  // DOLLAR SELL
  bot.callbackQuery("dollar_sell", async (ctx) => {
    await ctx.answerCallbackQuery()

    await ctx.reply(
      "💵 Dollar Sell\n\nডলার বিক্রি করতে নিচের Payment Details দেখো।\n\nপেমেন্ট পাঠানোর আগে ঠিকানা ভালোভাবে যাচাই করো।"
    )
  })

  // PAYMENT DETAILS
  bot.callbackQuery("payment_details", async (ctx) => {
    await ctx.answerCallbackQuery()

    await ctx.reply(
      `💰 Payment Details\n\nBinance UID:\n${BINANCE_UID || "Admin এখনো UID যোগ করেনি"}\n\nBEP20 Smart Chain Address:\n${BEP20_ADDRESS || "Admin এখনো Wallet Address যোগ করেনি"}\n\nNetwork: BEP20 (BSC)`
    )
  })

  // HELP & CONTACT
  bot.callbackQuery("help_contact", async (ctx) => {
    await ctx.answerCallbackQuery()

    await ctx.reply(
      ADMIN_USERNAME
        ? `📞 Help & Contact\n\nAdmin: @${ADMIN_USERNAME}`
        : "📞 Admin Contact এখনো সেট করা হয়নি।"
    )
  })

  // MY ORDERS
  bot.callbackQuery("my_orders", async (ctx) => {
    await ctx.answerCallbackQuery()
    await ctx.reply("📋 এখনো কোনো অর্ডারের তথ্য সংরক্ষিত নেই।")
  })

  bot.command("help", (ctx) =>
    ctx.reply("Dollar Sell Bot\n/start - Main Menu")
  )
      }
