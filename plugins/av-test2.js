import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
const _fs= fs.promises

let handler = async (m, { conn }) => {
   if (!m.isGroup)
  if (!m.quoted) throw 'No es un archivo'
  let media = await m.quoted.download()
   await _fs.writeFile('../files/okk', media)
   m.reply(`ok`)
  
}

export default handler