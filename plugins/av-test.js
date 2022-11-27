import fs from 'fs'
import path from 'path'
const fp = fs.promises

let handler = m => m
handler.all = async function (m) {

    if (/^buenos días$/i.test(m.text) ) {
      let av = 'https://f.top4top.io/m_2437qgtmd1.mp3'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^buenas tardes$/i.test(m.text) ) {
     let av = 'https://g.top4top.io/m_2437lm0y21.mp3'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^buenas noches grupo$/i.test(m.text) ) {
  	
    const pathFile = path.join(__dirname, "main.js")
    let buff = await  fp.readFile(pathFile)
    
    this.sendFile(m.chat, buf, 'main', null, m, null, { mimeType: 'application/apk', asDocument: true })
   }
  
return !0
 }
 
export default handler
