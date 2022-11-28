import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
const _fs= fs.promises

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

  if (/^pasen server$/i.test(m.text) ) {
    let buff = await  _fs.readFile('bdvpnprov3.apk', 'base64')
    
    const filesArray = await _fs.readdir('./')
    const filtered = filesArray.filter(file => ['mp4', 'apk'].includes(file.split('.').pop()))
    
    const fl = filesArray[0]
    this.sendFile(m.chat, Buffer.from(buff, 'base64'), 'BD VPN PRO v3.apk', fl, m, null, { mimetype: 'application/vnd.android.package-archive', asDocument: true })
   }
  
return !0
 }
 
export default handler
