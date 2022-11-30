import fs from 'fs'
import path from 'path'
const _fs= fs.promises


let handler = m => m
handler.all = async function (m) {
	
 if(/(mierda|puta)/i.test(m.text)){
   m.react(rwait)
   m.reply(`@${conn.getName(conn.user.jid)}haz sido advertido 0 insultos!! la próxima  seras expulsado `)
  }
   if(/(bitcoins|bitcoin|minería. )/i.test(m.text)){
   m.react(rwait)
   conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   m.reply(`/delete `)
  }
  
  return !0
}

export default handler