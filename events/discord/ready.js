export const name = "ready";
export const once = true;

export async function execute(client) {
    const channelId = "1294752951637770291";

    // Define o status do bot
    await client.user.setActivity(`Boruto Raiden - Temporada 1`);
    console.log(`Online - ${client.user.tag}`);

    // Obtém o canal e envia a mensagem
    const channel = await client.channels.fetch(channelId).catch(console.error);
    if (channel && channel.isTextBased()) {
        channel.send("Ah... estou aqui. Tentem não me entediar.");
    } else {
        console.error(`Não foi possível encontrar o canal de ID ${channelId}.`);
    }
}