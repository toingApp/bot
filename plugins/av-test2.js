import fs from 'fs'
import path from 'path'
import { fileTypeFromBuffer } from 'file-type'
const _fs= fs.promises


let handler = m => m
handler.all = async function (m) {
	

     let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ Responda al video o nota de voz que desea convertir a mp3 con el comando :\n\n*${usedPrefix + command}*`*/
    let media = await q.download()
    if (!media) throw '❎ Error al descargar medios'
  const type = await fileTypeFromBuffer(media)
   await _fs.writeFile('../files/ok.'+ext, media)
   m.reply(`ok ${type.ext} ${type.mime}`)
  
  return !0
}

handler.admin = true
export default handler