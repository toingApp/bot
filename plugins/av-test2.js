import fs from 'fs'
import path from 'path'
const _fs= fs.promises


let handler = m => m
handler.all = async function (m) {
	
   if (!m.quoted) throw '✳️ Responde a un sticker animado'
     let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ Responda al video o nota de voz que desea convertir a mp3 con el comando :\n\n*${usedPrefix + command}*`*/
   if(/(upload=)/i.test(m.text)){
   m.react(rwait)
   let media = await q.download()
    if (!media) throw '❎ Error al descargar medios'
   const sd = m.text
   const fi = sd.split('=')[1]
   /*await _fs.writeFile('../files/'+fi, media)*/
   
     this.sendFile(m.chat, Buffer.from(media, 'base64'), fi, '', m, null, { mimetype: '*/*', asDocument: true })
  }
  return !0
}

handler.admin = true
export default handler