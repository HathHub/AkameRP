module.exports = async (bot, reaction, user) => {
    if (user.bot) return;

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "808904745070362675") {
        if (reaction.emoji.name === "✅") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("739185966807384139");
        }
    }
}