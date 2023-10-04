export function mute(channel) {
    for (const [memberID, member] of channel.members) {
        member.voice.setMute(true);
    }
}