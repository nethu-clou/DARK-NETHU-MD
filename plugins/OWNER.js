//======================== restart command =============================

const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    react: "♻",
    desc: "restart the bot",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return
const {exec} = require("child_process")
reply("*Restarting...*")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//=========================== main owner command ===========================
const fs = require("fs");

// 4. Block User
cmd({
    pattern: "block",
    desc: "Block a user.",
    category: "owner",
    react: "🚫",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("*❌ You are not the owner!*");
    if (!quoted) return reply("*❌ Please reply to the user you want to block.*");

    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'block');
        reply(`*🚫 User ${user} blocked successfully.*`);
    } catch (error) {
        reply(`*❌ Error blocking user: ${error.message}*`);
    }
});

// 5. Unblock User
cmd({
    pattern: "unblock",
    desc: "Unblock a user.",
    category: "owner",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("*❌ You are not the owner!*");
    if (!quoted) return reply("*❌ Please reply to the user you want to unblock.*");

    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'unblock');
        reply(`*✅ User ${user} unblocked successfully.*`);
    } catch (error) {
        reply(`❌ Error unblocking user: ${error.message}`);
    }
});

// 6. Clear All Chats
cmd({
    pattern: "clearchats",
    desc: "Clear all chats from the bot.",
    category: "owner",
    react: "🧹",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("*❌ You are not the owner!*");
    try {
        const chats = conn.chats.all();
        for (const chat of chats) {
            await conn.modifyChat(chat.jid, 'delete');
        }
        reply("*🧹 All chats cleared successfully!*");
    } catch (error) {
        reply(`*❌ Error clearing chats: ${error.message}*`);
    }
});

// 7. Get Bot JID
cmd({
    pattern: "jid",
    desc: "Get the bot's JID.",
    category: "owner",
    react: "🤖",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("❌ You are not the owner!");
    reply(`🤖 *Bot JID:* ${conn.user.jid}`);
});

// 8. Group JIDs List
cmd({
    pattern: "gjid",
    desc: "Get the list of JIDs for all groups the bot is part of.",
    category: "owner",
    react: "📝",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply }) => {
    if (!isOwner) return reply("*❌ You are not the owner!*");

    const groups = await conn.groupFetchAllParticipating();
    const groupJids = Object.keys(groups).join('\n');
    reply(`📝 *Group JIDs:*\n\n${groupJids}`);
});
//______________________fullpp____________________________
cmd({
    pattern: "fullpp",
    desc: "full pp",
    category: "owner",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, reply, q }) => {
    if (!isOwner) return reply("*❌ You are not the owner!*");
    let media;
if (q.imageMessage) {
     media = q.imageMessage

  } else {
    m.reply('This is not an image...'); return
  } ;

var medis = await client.downloadAndSaveMediaMessage(media);



                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await client.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    m.reply("*Bot Profile Picture Updated*")
             });  

//=========================== Premium command ========================

const premiumGroups = []; 


// Command to add group to the premium list
cmd({
    pattern: "premium",
    desc: "Add this group to the premium list",
    use: ".premium",
    react: "💳",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {
    const isAdmin = m.participant === mek.from;

    if (!isAdmin) {
        return reply("Only owner can add premium groups.\nContact Owner +94704227534");
    }

    if (!premiumGroups.includes(from)) {
        premiumGroups.push(from);
        reply("This group has been added to the premium list.");
    } else {
        reply("This group is already in the premium list.");
    }
});

// Command to remove a group from the premium list
cmd({
    pattern: "removepremium",
    desc: "Remove this group from the premium list",
    use: ".removepremium",
    react: "❌",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {
    const isAdmin = m.participant === mek.from; 

    if (!isAdmin) {
        return reply("Only admins can remove premium groups.");
    }

    const index = premiumGroups.indexOf(from);
    if (index > -1) {
        premiumGroups.splice(index, 1);
        reply("This group has been removed from the premium list.");
    } else {
        reply("This group is not in the premium list.");
    }
});

// Command to check if a group is premium
cmd({
    pattern: "ispremium",
    desc: "Check if this group is a premium group",
    use: ".ispremium",
    react: "🔍",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, q, reply }) => {
    if (premiumGroups.includes(from)) {
        reply("This group is a premium group.");
    } else {
        reply("This group is not a premium group.");
    }
});

module.exports = {
    premiumGroups
};
