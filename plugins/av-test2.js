import pkg from 'xhr2';
const {XMLHttpRequest} = pkg;
var xhr = new XMLHttpRequest()
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
  	
  let open_ai_response;
var url = "https://api.openai.com/v1/completions";

  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer sk-G2fr5iIPUrekLDAX1WvT3BlbkFJtQ3Lps3Rg4crsDpq3Etz");
 xhr.setRequestHeader("GT-TUNNEL", "org-EU9Vj3AsCkYQYC7FEuubwINk");
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        open_ai_response = xhr.responseText;
        console.log(open_ai_response);
     }};

  var data = `{
    "prompt": "buenos días",
    "temperature": 0,
    "max_tokens": 79,
    "model": "text-davinci-003"
  }`;

  xhr.send(data);
  
  m.reply(`${open_ai_response}`)

 }
  return !0
}





export default handler