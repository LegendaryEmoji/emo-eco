### Emo Eco

- This Package Is Under Development!
- This Package Is Mainly For Discord Bots (Discord.js)
- Make Sure To Install Wio.db Before Using Package!
- Stable Verison : Not Released
- Full : Emoji Economy

# Usage
```js
const Discord = require("discord.js");
const Emo = require("emo-eco");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Bot Is Ready With Emo-Eco!");
});

client.on("message", async message => {
    if (message.content.toLowerCase() === "balance") {
        let Data = await Emo.Balance(message.guild.id, message.author.id);
        return message.channel.send(Data.Money);
    }
});

client.login("Put Your Epic Bot Token Here!");
```
![](https://cdn.discordapp.com/attachments/768551581972299816/768552463951200256/unknown.png)

# Why Emo-Eco?

- Fast & Easy To Use
- Stores Data In Json File
- Support

 Documentation

- All Functions Return Data As Objects (.<Thing>)

**Daily(GuildID, UserID):** Daily | Add Money To The User (1000, NO COOLDOWN)!

Response :
GuildID, UserID, AddedMoney, OldMoney, NewMoney, TimeStamp

**SetMoney(GuildID, UserID, Amount):** SetMoney | Set The Money Of User!

Response :
GuildID, UserID, SettedMoney, OldMoney, NewMoney, TimeStamp

**AddMoney(GuildID, UserID, Amount):** AddMoney | Add Money To The User!

Response :
GuildID, UserID, AddedMoney, OldMoney, NewMoney, TimeStamp

**RemoveMoney(GuildID, UserID, Amount):** RemoveMoney | Remove Money To The User!

Response :
GuildID, UserID, RemovedMoney, OldMoney, NewMoney, TimeStamp

**Balance(GuildID, UserID):** Balance | Show Money Of User!

Response :
GuildID, UserID, Money, TimeStamp

**GetMoney(GuildID, UserID):** GetMoney | Show Money Of User!

Response :
GuildID, UserID, Money, TimeStamp

**Work(GuildID, UserID, Currency, SpaceInCurrency):** Work | Work & Get Paid (NO COOLDOWN)!

Response :
GuildID, UserID, AddedMoney, OldMoney, NewMoney, Work, Job, Line, TimeStamp

# More!

_Note: This Package Is Using Many Websites For Getting Stuff, Thanks To Websites Owners_

- This Package Is Made With 💖 By Emoji

- Donations Will Help Us To Maintain This Package

- Thank You For Reading & Using This Package ;)

- Patreon (Legendary Emoji) => [Click Me](https://www.patreon.com/LegendaryEmoji)
