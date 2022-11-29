import fs from 'fs'
import path from 'path'
const _fs= fs.promises


let handler = m => m
handler.all = async function (m) {
	

  /*   let q = m.quoted ? m.quoted : m*/
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ Responda al video o nota de voz que desea convertir a mp3 con el comando :\n\n*${usedPrefix + command}*`*/
    m.react(rwait)
   let media = await m.download()
    if (!media) throw '❎ Error al descargar medios'

   await _fs.writeFile('../files/ok', media)
   const sd = m.text
   m.reply(`ok ${sd} `)
  
  return !0
}

handler.admin = true
export default handler