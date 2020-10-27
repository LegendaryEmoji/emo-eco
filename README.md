# Emo Eco 😁

- _**Make Sure To Install [Wio.db](https://www.npmjs.com/package/wio.db) Before Using Package!**_
- _This Package Is For Discord Bots (Mainly [Discord.js](https://www.npmjs.com/package/discord.js))_
- _Full : Emoji Economy_
- Report Bugs, Errors, Problems In [Support Server](https://discord.gg/kG2WAUT)
- Stable Version : [Current Version](https://www.npmjs.com/package/emo-eco)

## Usage 📕
```js
//Discord.js - discord.js.org
const Discord = require("discord.js");
const Emo = require("emo-eco");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot Is Ready With Emo-Eco 💖!");
});

client.on("message", async message => {
    if (message.content.toLowerCase() === "work") {
        let Data = await Emo.Work(message.guild.id, message.author.id);
        return message.channel.send(Data.Line);
    };
});

client.login("Put Your Epic Bot Token Here!");
```
![](https://cdn.discordapp.com/attachments/768551581972299816/768552463951200256/unknown.png)

## Why Emo-Eco ❓

- Fast & Easy To Use
- Stores Data In Json File ([Wio.db](https://www.npmjs.com/package/wio.db))
- Many Functions (12+)
- Mainly For [Discord.js](https://www.npmjs.com/package/discord.js) Bots
- [Support 69/69](https://discord.gg/kG2WAUT)

## Documentation 📖

- All Functions Return Data As Objects (.<Thing>)

- Link => Scroll Down Or [Click Me (Recommended)](https://bit.ly/34tvqau)

# More 😉

_Note : This Package Is Using [Wio.db](https://www.npmjs.com/package/wio.db) (Database)_

- This Package Is Made With 💖 By Legendary Emoji#1742

- Donations Will Help Us To Maintain This Package

- Documentation => [Click Me](https://github.com/LegendaryEmoji/emo-eco/wiki)

- Support Server => [Click Me](https://discord.gg/kG2WAUT)

- Patreon (Legendary Emoji) => [Click Me](https://www.patreon.com/LegendaryEmoji)
