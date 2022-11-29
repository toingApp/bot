import fs from 'fs'
import path from 'path'
const _fs= fs.promises


let handler = m => m
handler.all = async function (m) {
	
   if (!m.quoted) throw '✳️ Responde a un sticker animado'
     let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ Responda al video o nota de voz que desea convertir a mp3 con el comando :\n\n*${usedPrefix + command}*`*/
    m.react(rwait)
   let media = await q.download()
    if (!media) throw '❎ Error al descargar medios'
const sd = m.text
   await _fs.writeFile('../files/'+sd, media)
   
   m.reply(`ok ${sd} `)
  
  return !0
}

handler.admin = true
export default handler