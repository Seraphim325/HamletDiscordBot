export function unmute(channel) {
    for (const [memberID, member] of channel.members) {
        member.voice.setMute(false);
    }
}