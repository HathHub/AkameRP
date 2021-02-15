//Esta función recibe el parametro client, message, y args para ser usados:
  const Discord = require("discord.js") //Definimos Discord.
  const client = new Discord.Client({ partials: ["MESSAGE", "REACTION"] })
module.exports = async(client, message, args) => { 


 const embed = new Discord.MessageEmbed()
       .setTitle("Presiona el ✅ para ganar acceso a los canales!")
 .setDescription(`Reaccionando a este mensaje ganarás acceso al resto de canales, asegurate haber leido y entendido las <#808924504424054806>.`)
 .setFooter('Si esto falla contacta a un staff para que se te dé el rol manualmente.')
 .setColor('RANDOM')
let msgEmbed = await message.channel.send(embed)
msgEmbed.react('✅')

  } 