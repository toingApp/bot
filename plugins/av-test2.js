import OpenAIAPI from 'openaiapi'

const OPENAI_API_KEY = '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'

let handler = m => m
handler.all = async function (m) {
	
 if(/(mierda|puta)/i.test(m.text)){
   m.react(rwait)
   m.reply(`${conn.getName(m.sender)}  @${m.sender.split('@')[0]} haz sido advertido 0 insultos!! la próxima  seras expulsado `)
  }
   if(/(bitcoins|bitcoin|minería)/i.test(m.text)||m.sender.startsWith('234')){
   m.react(rwait)
   conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   m.reply(`/delete `)
  }
  
  if(/^ok/i.test(m.text)){
  	const openai = new OpenAIAPI(OPENAI_API_KEY)

openai.CompletionsCreate(m.text)
  .then(function(data) {
  m.reply(`Exito`)
  })
  .catch(function(err) {
  m.reply(`error`)
 })
 }
  return !0
}

export default handler