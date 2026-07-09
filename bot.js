const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: 'UnknownFG101-85j1.aternos.me',
    port: 25785,
    username: 'AFKBot123',
    auth: 'offline'
  })

  bot.on('login', () => console.log('✅ Logged In'))

  bot.on('spawn', () => {
    console.log('✅ Spawned')

    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 300)

    }, 2000)
  })

  bot.on('kicked', console.log)
  bot.on('error', console.log)

  bot.on('end', () => {
    console.log('Disconnected... Reconnecting')
    setTimeout(startBot, 5000)
  })
}

startBot()