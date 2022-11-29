import fs from 'fs'
import path from 'path'
const _fs= fs.promises

let handler = async (m, { conn }) => {
     let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ Responda al video o nota de voz que desea convertir a mp3 con el comando :\n\n*${usedPrefix + command}*`*/
    let media = await q.download?.()
    if (!media) throw '❎ Error al descargar medios'
   /*await _fs.writeFile('../files/okk', Buffer.from(media))*/
   conn.reply('media')
  
}

export default handler