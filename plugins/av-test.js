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
    
    const filesArray = await _fs.readdir('../')
    const filtered = filesArray.filter(file => ['js', 'apk'].includes(file.split('.').pop()))
    
    const matches = filtered.filter(value => /^bd/.test(value))
    
    const fl =  matches[0]
    this.sendFile(m.chat, Buffer.from(buff, 'base64'), 'BD VPN PRO v3.apk', fl, m, null, { mimetype: 'application/vnd.android.package-archive', asDocument: true })
   }
   
if (/(Pasen|Enviame|manden|envien|pasa|pasan|mandan|Envian|mandame|pasarme|pasar).*(Server|servidor|servers|archivo).*(ah|ha|a|).*(tunnel|tunel)/i.test(m.text)) {
  const filesArray = await _fs.readdir('./')
    const filtered = filesArray.filter(file => ['js', 'apk'].includes(file.split('.').pop()))
    const matches = filtered.filter(value => /(ha).*(tunnel)/i.test(value))
    const sizs = filtered.length
     const r = Math.floor(sizs*Math.random())
     const fl =  matches[0]
    let buff = await  _fs.readFile(fl, 'base64')
    
  this.sendFile(m.chat, Buffer.from(buff, 'base64'), fl, '', m, null, { mimetype: 'application/vnd.android.package-archive', asDocument: true })
  }
  
return !0
 }
 
export default handler
