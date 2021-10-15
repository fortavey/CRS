const fs = require('fs')
const path = require('path')

module.exports = function (bot, msg, userList) {
  const html = `${msg.text}`

  userList.forEach((user) => {
    bot
      .forwardMessage(user, msg.chat.id, msg.message_id)
      .then((data) => console.log(`Send: ${user}`))
      .catch((err) => {
        const stamp = Date.now()
        fs.writeFile(
          path.resolve(__dirname, `log/${stamp}.txt`),
          JSON.stringify({
            err: `ERROR: ${user} - write to file /log/${stamp}.txt`,
            error: err,
          }),
          function (error) {
            if (error) return console.log(error)
            console.log(`ERROR: ${user} - write to file /log/${stamp}.txt`)
          }
        )
      })
  })
}
