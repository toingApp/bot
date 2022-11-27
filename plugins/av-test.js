
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
    let buff = await  this.readFile("main.js")
    
    this.sendFile(m.chat, buf, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
   }
  
return !0
 }
 
export default handler
