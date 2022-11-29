import fs from 'fs'
import path from 'path'
const _fs= fs.promises


let handler = m => m
handler.all = async function (m) {
	
 if(/(mierda|puta)/i.test(m.text)){
   m.react(rwait)
   m.reply(`${conn.getName(conn.user.jid)}haz sido advertido 0 insultos!! la próxima  seras expulsado `)
  }
  return !0
}

handler.admin = true
export default handler