import { OpenAI } from 'gpt-x'
const API_KEY = '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'
const openai = new OpenAI(apikey: API_KEY, organization: 'my-organization')
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
  	

const completion = await openai.complete('curie', {
    prompt: 'Q: Hello\nA:',
    user: 'user-123'
});
  m.reply(`completion.choices[0].text`)

 }
  return !0
}

export default handler