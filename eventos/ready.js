//Esta función se activara cuando el evento haya iniciado:
const Discord = require(`discord.js`)
module.exports = (client) => {
  

  
  client.user.setPresence( 
    {
      status: "online", 
      game: { 
        name: '!ping pong', 
        url: null, // Establece el enlace del juego si el tipo es "STREAMING".
        type: "WATCHING"
      }
    }
  );
 
 client.on('message', (message) => {
   if(message.author.bot) return;
if (message.channel.id === '807760192774471680') {
   let channel = client.channels.cache.get('807760192774471680');
   const embed = new Discord.MessageEmbed()
   .setTitle(`Nueva Sugerencia`)
   .setDescription(`${message.content} \n \n 📊 | Tu sugerencia será leída, espera a que vote la comunidad`)
   .setThumbnail(message.author.displayAvatarURL())
   .setColor('RANDOM')
   .setFooter(`Sugerencia por ${message.author.username}`)
   message.delete()
channel.send(embed).then(message => {
                message.react('👍')
     message.react('👎')
                .then(() => {
                
                })
            })

  }    

 }) 
  

  // alternatively, you can use e asynchronous)


    
}
  
