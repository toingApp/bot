let handler = m => m
handler.all = async function (m) {

let mime = m.msg.mimetype
if(/^apk/i.test(mime)){
	await m.reply(`Apk detect ${mime}`)
}
	return !0
 }
 
export default handler
