const commands = [
    {
        name: 'SLASH PREFIX',
        description: 'SLASH DESCRIPTION',
    },
    

]

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Pending...')
     await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID
            ),
            { body: commands }
     );
     console.log('Slash Commands was loaded')
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();
