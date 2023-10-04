export function getGuild(client, guildId) {
    return client.guilds.cache.get(guildId);
}

export function getUser(guild, userId) {
    return guild.members.cache.get(userId);
}