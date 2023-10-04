import { TOKEN, CLIENT_ID/*, GUILD_ID */ } from "./var.js";
import { getGuild, getUser } from "./utils.js";
import { mute } from "./commands/mute.js";
import { unmute } from "./commands/unmute.js";
import { Client, GatewayIntentBits, Routes } from "discord.js";
import { REST } from "@discordjs/rest";

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
]});

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.on("interactionCreate", interaction => {
    if (interaction.isChatInputCommand) {
        const channel = getUser(getGuild(client, interaction.guild.id), interaction.user.id).voice.channel;
        if (channel) {
            if (interaction.commandName === "mute") {
                interaction.reply({ content: "1" });
                mute(channel);
            }
            if (interaction.commandName === "unmute") {
                interaction.reply({ content: "2" });
                unmute(channel);
            }
        }
    }
});

async function main() {
    const commands = [
        {
            name: "mute",
            description: "Mutes channel from which command was called"
        },
        {
            name: "unmute",
            description: "Unmutes channel from which command was called"
        }
    ];
    try {
        await rest.put(Routes.applicationCommands(CLIENT_ID), {body: commands});
        // await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {body: commands});
        client.login(TOKEN);
    } catch (error) {
        console.error(error);
    }
}

main();