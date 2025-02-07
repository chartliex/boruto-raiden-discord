import { SlashCommandBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('spam')
    .setDescription('SPAM de divulgação do servidor oficial no Discord do Boruto Raiden.')

    .addStringOption(option =>
        option.setName('tipo_spam')
          .setDescription('Qual tipo de SPAM de divulgação deseja visualizar?')
          .addChoices(
              { name: `Discord`, value: 'discord' },
              { name: `Whatsapp e outros`, value: 'whatsapp' },
          )
          .setRequired(true)
    )

    .setContexts(0);

export async function execute(interaction, userAccount, userDB, infoGameDB, itemDB, jutsuDB, invDB, clanDB, client) {
    const typeSpam = interaction.options.getString('tipo_spam')

    if (typeSpam === "discord") {
        return await interaction.reply({ content: `# ⌜ Boruto  ϟ  Raiden ⌟
Após os acontecimentos que demarcaram o fim da era ninja, o mundo conseguiu se livrar das ameaças que infligiram muitos danos, os Otsutsukis.

Entretanto, os líderes de cada nação, cobertos por ganância, começaram a querer dominar o globo. Guerras afloraram o mundo, países foram destruídos, vilas se tornaram ruínas, até que, num empasse, os líderes que dominavam as nações decidiram sobre voto unânime, criar uma trégua. 

Mas... Será que isso realmente acabará em paz?
## O que oferecemos:
> :robot: Servidor semi-automático com site, bot e aplicativo exclusivo, esqueça turnos de 2000 caracteres todos os dias.
> :scroll: Modo história com um evento toda semana.
> :crossed_swords: Campeonato das Nações para competir pela sua vila para decidir a mais forte.
> :handshake: Seguro, justo e honesto.
> :cyclone: Sorteio de 4 clãs para escolher para seu personagem entre 50 opções disponíveis.
## Ficou interessado?
Acesse nosso site: https://borutoraiden.com
Veja nosso servidor: https://discord.borutoraiden.com

Também estamos com uma vaga para staff responsável pelo Instagram e marketing.

Entre agora mesmo e comece sua jornada ninja!`
        });
    }
    else {
        return await interaction.reply({ content: `> *⌜ BORUTO  ϟ  RAIDEN ⌟*

Após os acontecimentos que demarcaram o fim da era ninja, o mundo conseguiu se livrar das ameaças que infligiram muitos danos, os Otsutsukis.

Entretanto, os líderes de cada nação, cobertos por ganância, começaram a querer dominar o globo. Guerras afloraram o mundo, países foram destruídos, vilas se tornaram ruínas, até que, num empasse, os líderes que dominavam as nações decidiram sobre voto unânime, criar uma trégua. 

Mas... será que isso realmente acabará em paz?
*O que oferecemos:*
> 🤖 Servidor semi-automático com site, bot e aplicativo exclusivo, esqueça turnos de 2000 caracteres todos os dias.
> 📜 Modo história com um evento toda semana.
> ⚔️ Campeonato das Nações para competir pela sua vila para decidir a mais forte.
> 🤝 Seguro, justo e honesto.
> 🌀 Sorteio de 4 clãs para escolher para seu personagem entre 50 opções disponíveis.
* Ficou interessado?
Acesse nosso site: https://borutoraiden.com
Veja nosso servidor: https://discord.borutoraiden.com

> Também estamos com uma vaga para staff responsável pelo Instagram e marketing.

Entre agora mesmo e comece sua jornada ninja!`
        });
    }
}