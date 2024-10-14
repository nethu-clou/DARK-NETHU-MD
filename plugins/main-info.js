let handler = async (m, { conn, args, usedPrefix, command }) => {
let pp = './src/fg_logo.jpg'
m.react('💝')

    let str = `> 💝 Qᴜᴇᴇɴ-ꜱʜᴇɴᴀʟɪ-ʙᴏᴛ💝


*┌ 乂📥 BOT INFO📥 乂*
🧚‍♀️◦ *ɴᴀᴍᴇ ʙᴏᴛ* : ꜱʜᴇɴᴀʟɪ-ᴍᴅ💝    
🧚‍♀️◦ *ᴛʏᴘᴇ ᴘʟᴀᴛꜰʀᴏᴍ* : ʀᴇᴘɪʟᴛ💝   
🧚‍♀️◦ *ᴊᴏɪɴ ᴍʏ ɢʀᴏᴜᴘ* :  https://whatsapp.com/channel/0029VarjriX0bIdn0DNuP41O 💝
*└ ◦

*┌ 乂 🔎 OWNER INFO🔍乂*
🧚‍♀️◦ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/94768738555
🧚‍♀️◦ *ᴄʀᴇᴀᴛᴏʀ* : ᴀꜱʜᴇɴᴇᴅɪᴛᴢ💝
*└ ◦ 

> *⚖️Queen-Shenali- : ©AshenEditZ official2024💗*    `
    conn.sendMessage(m.chat, {
      text: str,
      contextInfo: {
      
      mentionedJid: [m.sender],
      isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363343441743645@g.us',
                newsletterName: global.author,
                serverMessageId: -1
            },
      forwardingScore: 999,
      externalAdReply: {
      title: "💝Qᴜᴇᴇɴ-ꜱʜᴇɴᴀʟɪ-ᴍᴅ💝",
      body: "Bot Info",
      thumbnailUrl: pp,
      sourceUrl: '',
      mediaType: 1,
      renderLargerThumbnail: false
      }}})
      m.react('👨‍💻')
}
handler.help = ['alive']
handler.tags = ['main']
handler.command = ['info']
export default handler
