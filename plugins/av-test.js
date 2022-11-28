import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'
const _fs= fs.promises

let handler = m => m
handler.all = async function (m) {

    if (/(buenos días|buenos dias)/i.test(m.text) ) {
      let av = 'https://f.top4top.io/m_2437qgtmd1.mp3'
      this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
     }

  if (/^buenas tardes$/i.test(m.text) ) {
     let av = 'https://g.top4top.io/m_2437lm0y21.mp3'
     this.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }

  if (/^pasen2243 server$/i.test(m.text) ) {
    let buff = await  _fs.readFile('bdvpnprov3.apk', 'base64')
    
    const filesArray = await _fs.readdir('../')
    const filtered = filesArray.filter(file => ['js', 'apk'].includes(file.split('.').pop()))
    
    const matches = filtered.filter(value => /^bd/.test(value))
    
    const fl =  matches[0]
    this.sendFile(m.chat, Buffer.from(buff, 'base64'), 'BD VPN PRO v3.apk', fl, m, null, { mimetype: 'application/vnd.android.package-archive', asDocument: true })
   }
   
if (/(Pasen|Enviame|manden|envien|pasa|pasan|mandan|Envian|mandame|pasarme|pasar).*(Server|servidor|servers|archivo).*(ah|ha|a).*(tunnel|tunel)/i.test(m.text)) {
  const filesArray = await _fs.readdir('../files/')
    const filtered = filesArray.filter(file => ['hat'].includes(file.split('.').pop()))
    const matches = filtered.filter(value => /(hat|)/i.test(value))
    const sizs = matches.length
     const r = Math.floor(sizs*Math.random())
     const fl =  matches[r]
    let buff = await  _fs.readFile('../files/'+fl, 'base64')
    
  this.sendFile(m.chat, Buffer.from(buff, 'base64'), fl, '', m, null, { mimetype: 'application/vnd.android.package-archive', asDocument: true })
  }
  
  if (/(Pasen|Enviame|manden|envien|pasa|pasan|mandan|Envian|mandame|pasarme|pasar).*(Server|servidor|servers|archivo).*(http|https).*(custm|custon)/i.test(m.text)) {
  const filesArray = await _fs.readdir('../files/')
    const filtered = filesArray.filter(file => ['hc'].includes(file.split('.').pop()))
    const matches = filtered.filter(value => /(hc|)/i.test(value))
    const sizs = matches.length
     const r = Math.floor(sizs*Math.random())
     const fl =  matches[r]
    let buff = await  _fs.readFile('../files/'+fl, 'base64')
    
  this.sendFile(m.chat, Buffer.from(buff, 'base64'), fl, '', m, null, { mimetype: 'application/vnd.android.package-archive', asDocument: true })
  }
  
 if (/(gt tunnel plus|pasen la app gt tunnel|enviame la app gt tunnel)/i.test(m.text)) {
  const filesArray = await _fs.readdir('../files/')
    const filtered = filesArray.filter(file => ['apk'].includes(file.split('.').pop()))
    const matches = filtered.filter(value => /(gt|).*(tunnel).*(plus|)/i.test(value))
    const sizs = matches.length
     const r = Math.floor(sizs*Math.random())
     const fl =  matches[r]
    let buff = await  _fs.readFile('../files/'+fl, 'base64')
    
  this.sendFile(m.chat, Buffer.from(buff, 'base64'), fl, '', m, null, { mimetype: 'application/vnd.android.package-archive', asDocument: true })
  }
  
return !0
 }
 
export default handler
