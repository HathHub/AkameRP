//Esta función recibe el parametro client, message, y args para ser usados:
  const Discord = require("discord.js") //Definimos Discord.
module.exports = async(client, message, args) => { 


 const embed1 = new Discord.MessageEmbed()
       .setTitle(":bookmark: | Reglas de la comunidad")
 .setDescription(`> **Las siguientes reglas cuentan únicamente para el servidor de Discord. Toda regla esta sujeta a cambio y se informara en dicho caso.**`)
 .addField(`1.1 Faltas de Respeto`,`Queda totalmente prohibido faltarle el respeto a cualquier miembro de la comunidad sin importar su rango, no hay circunstancia en la que esta regla sea aceptable sin importar qué.
 Dicho esto, a su vez esta prohibido molestar a alguien con intención de hacerle incumplir esta regla, cualquier intento de "torear" de esta forma a alguien es inaceptable.`)
.addField(`1.2 SPAM`,`En ningùn caso tienes permitido mandar una invitación a un servidor de discord/comunidad de unturned ajena a nosotros/videos o canales de youtube (lo mismo para sus derivadas paginas web).`)
 .addField(`1.3 Bugs y fallas`,`En el caso de encontrar un error, pertinente a spam u otros, debe ser reportado inmediatamente a el staff mediante la creación de un ticket en <#>, cualquier intento de arovecharse o hacer uso efectivo de dicho error sera penalizado según la severidad del mismo.`)
 .addField(`1.4 ALTS`,`No se permite poseer más de una cuenta de Steam dentro del servidor, salvo excepciones justificadas y comunicadas al staff (esto no aplica al uso de diversos characters para la diverisdad del rol suponiendo que su uso sea adecuado).`)
 .addField(`1.5 Contenido Ilegal`,`No se permitirá la difunción de contenido NSFW (contenido de carácter sexual), pornografía infantil o cualquier contenido que viole las reglas [TOS](https://discord.com/terms)`)
 .addField(`1.6 Información personal`,`Al enviar información como contraseñas, correos electronicos, lugar de residencia, IPs o alguna otra información de caracter personal las consecuencias caerán sobre tus propios hombros. No obstante el acto de difundir información ajena sí será penalizado.`)
 .addField(`1.7 No discutas`,`La palabra del staff es final, ningún staff esta obligado a dar respuestas de sus acciones frente a un miembro de la comunidad, en caso de que un staff es te haciendo un uso incorrecto del poder que se le otorgo debe ser informado a un staff superior de inmedianto, el cual llevara a cabo lo que amerite la situación.`)
 .setColor('GREEN')
 .setFooter(`Reglas escritas por Hath, por cualquier duda contactarlo a él | Ultima actualización 10 feb 2021`)
 message.channel.send(embed1)
  
 const embed2 = new Discord.MessageEmbed()
       .setTitle("<:descarga:808960804744331294> | Reglas INGame")
 .setDescription(`> **Las siguientes reglas cuentan únicamente dentro del servidor de Unturned. Toda regla esta sujeta a cambio y se informara en dicho caso.**`)
 .addField(`1.1 Contenedores en vehiculos`,`Solo se podrá tener un contenedor por vehiculo, esto partiendo de que sea un vehiculo el cual pueda con el peso, no una bicicleta, moto o caballo.`)
 .addField(`1.2 Zonas Seguras`,`De momento la ùnica zona segura en el mapa es el spawn, por el resto del mapa tendras que valerte por ti mismo. \n 
 En las zonas seguras no esta permitido: \n 
 - Matar, asaltar(incluye hurto de vehiculos) ni secuestrar. \n 
 - No podras utilizar esto como zona de intercambio para actos ilicitos o de otro fin. \n 
 - Esta prohibido el "campeo" de estas zonas.`)
 .addField(`1.3 Eventos`,`- Atentado: Debe haber 8 policías conectados. \n 
- Altercado: Debe haber 6 policías conectados. \n 
- Secuestro: Se pueden tener 2 rehenes como máximo y debe haber 6 sheriff conectados. \n 
- Banco: Debe haber 4 sheriff conectados. \n 
¡Solo puedes robar/atracar a alguien con 2 sheriff conectados!`)
 .addField(`1.4 Ropa de roles`,`Al asesinar a un sheriff solo podras lootear sus armas u objetos de valor ajenos a sus herramientas de rol, como radio, uniforme o placa`)
 .addField(`1.5 Normativa de armas`,`Cualquier civil puede portar el arma que quiera y de esa forma valerse por sus medios, en el caso de que un sheriff te pida papeles de porte de armas, en el caso de que cedas pacificamente, tendrás una penalización en la carcel y tus armas serán confiscadas. En el caso de que se te encuentre en una situación especifica portando un arma de fuego, la excusa "es para cazar" no será aceptada.`)
.addField(`1.6 Normativa de construcción`,`En este servidor puedes construir donde se te plazca, mientras que es aconsejado y de preferencia que construyan a lo largo del camino, dejano *1 cimiento* entre la calle y tu casa, no es estrictamente necesario. El limite de la estructura es 3x4(12 cimientos que pueden ser distribuidos como 3x4 o 4x3) con un maximo de 3 pisos, la idea es que cada casa tenga su tematica de "ranchito" y que no sean cajas de zapato, el mod de construcción es amplio, sé creativo!`)
 .addField(`1.7 Negocios`,`Cualquiera es libre de emprender su negocio en la puerta de su casa, cabe resaltar que este negocio sera compartido con su propiedad, es decir que no podrás tener otro edificio, tendrás que vivir en el mismo local, ya sea en el piso superior o de otra manera.`)
  .setColor('GREEN')
 .setFooter(`Reglas escritas por Hath, por cualquier duda contactarlo a él | Ultima actualización 10 feb 2021`)
 message.channel.send(embed2)
  
  const embed3 = new Discord.MessageEmbed()
       .setTitle("Terminaste?")
    .setColor('GREEN')
  .setDescription(`Una vez hayas terminado de leer las reglas y las hayas comprendido eres libre de ir a <#808904745070362675> para acceder al servidor.!\n  Gracias por leer.`)
 message.channel.send(embed3)
  }
