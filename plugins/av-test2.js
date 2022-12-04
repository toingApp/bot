import { Configuration, OpenAIApi } from "openai";

const API_KEY = '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'
const configuration = new Configuration({
    apiKey: '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',
});

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
  	

const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 7,
});
  m.reply(`ok`)

 }
  return !0
}

export default handler