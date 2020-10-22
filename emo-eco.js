const { IDCheck, AmountCheck, GetMoney, RandomNumber } = require("./Src/Functions.js");
const db = require("wio.db");

module.exports = {
    Daily: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";
        await db.add(`Eco_${GuildID}_${UserID}`, 1000);
        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: 1000,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            TimeStamp: new Date()
        };

        return Data;
    },
    SetMoney: async function (GuildID, UserID, Amount) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");
        if (!Amount) throw new Error(`Please Give Amount!`);
        await AmountCheck(Amount);

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";

        await db.set(`Eco_${GuildID}_${UserID}`, Amount);

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            SettedMoney: Amount,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            TimeStamp: new Date()
        };

        return Data;
    },
    AddMoney: async function (GuildID, UserID, Amount) {
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!Amount) throw new Error(`Please Give Amount!`);
        await AmountCheck(Amount);

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";

        await db.add(`Eco_${GuildID}_${UserID}`, Amount);

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: Amount,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            TimeStamp: new Date()
        };

        return Data;
    },
    RemoveMoney: async function (GuildID, UserID, Amount) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");
        if (!Amount) throw new Error(`Please Give Amount!`);
        await AmountCheck(Amount);

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";

        await db.substr(`Eco_${GuildID}_${UserID}`, Amount);

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            RemovedMoney: Amount,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            TimeStamp: new Date()
        };

        return Data;
    },
    Balance: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        IDCheck(UserID, "User");

        let UserMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (UserMoney === null) UserMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            Money: UserMoney,
            TimeStamp: new Date()
        };

        return Data;
    },
    GetMoney: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        IDCheck(UserID, "User");

        let UserMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (UserMoney === null) UserMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            Money: UserMoney,
            TimeStamp: new Date()
        };

        return Data;
    },
    Work: async function (GuildID, UserID, Currency, SpaceInCurrency) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");
        if (!Currency) throw new Error(`Please Give Currency Of Point/Coins | Points , Coins , $ , Etc`);

        let Works = [
            "Artist",
            "Singer",
            "Musician",
            "Builder",
            "Writer",
            "Cooker",
            "Programmer",
            "Creator",
            "Gamer",
            "Manager",
            "Youtuber",
            "Teacher",
            "President",
            "Editor",
            "Traveler",
            "Doctor",
            "God",
            "Legendary Warrior",
            "**__Ultra Legendary Superior God Of Everything__**",
            "Legendary Emoji"
        ];

        let RandomWork = Works[Math.floor(Math.random() * Works.length)];

        let Money;
        if (RandomWork.toLowerCase() === "Legendary Emoji") {
            Money = `500`;
        } else if (RandomWork.toLowerCase() === "**__ultra legendary superior god of everything__*") {
            Money = `350`;
        } else {
            Money = await RandomNumber("301");
        };

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";

        await db.add(`Eco_${GuildID}_${UserID}`, Money);

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: Money,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Work: RandomWork,
            Job: RandomWork,
            Line: `You Worked As A ${RandomWork} & Got ${Money}${SpaceInCurrency !== null ? ` ${Currency}` : `${Currency}`}`,
            TimeStamp: new Date()
        };

        return Data;
    }
};