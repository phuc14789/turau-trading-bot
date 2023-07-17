const ccxt = require("ccxt");

async function main(strapi) {
  //   const binance = new ccxt.binance();

  //   const price = await binance.fetchOHLCV("BTC/USDT", "1m");

  //Get all current trading pair
  let bots = await strapi.db.query("api::bot.bot").findMany({
    select: ["tradingPair"],
    where: { isOn: true },
    // orderBy: { publishedAt: 'DESC' },
    // populate: { category: true },
  });

  // Get unique trading pairs
  let temp = bots.map((item) => item.tradingPair);
  let tradingPairs = new Set(temp);

  console.log(tradingPairs);
}

module.exports = main;
