const {
    IDCheck,
    AmountCheck,
    GetMoney,
    MoneyChecker,
    RandomNumber
} = require("./Src/Functions.js");
const db = require("wio.db");

module.exports = {
    Yearly: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";
        await MoneyChecker(OldMoney, "OldMoney");
        await db.add(`Eco_${GuildID}_${UserID}`, 10);
        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: 10,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Line: `GG! You Have Claimed Your Yearly 10 Lmfao`,
            TimeStamp: new Date()
        };

        return Data;
    },
    Monthly: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";
        await MoneyChecker(OldMoney, "OldMoney");
        await db.add(`Eco_${GuildID}_${UserID}`, 5);
        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: 5,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Line: `GG! You Have Claimed Your Monthly 5 Lmao`,
            TimeStamp: new Date()
        };

        return Data;
    },
    Daily: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";
        await MoneyChecker(OldMoney, "OldMoney");
        await db.add(`Eco_${GuildID}_${UserID}`, 2400);
        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: 2400,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Line: `GG! You Have Claimed Your Daily 2400!`,
            TimeStamp: new Date()
        };

        return Data;
    },
    Hourly: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";
        await MoneyChecker(OldMoney, "OldMoney");
        await db.add(`Eco_${GuildID}_${UserID}`, 100);
        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: 100,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Line: `GG! You Have Claimed Your Hourly 100!`,
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
        await MoneyChecker(UserMoney, "UserMoney");

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            Money: UserMoney,
            Line: `You Have ${UserMoney}!`,
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
        await MoneyChecker(UserMoney, "UserMoney");

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            Money: UserMoney,
            Line: `You Have ${UserMoney}!`,
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
        await MoneyChecker(OldMoney, "OldMoney");

        await db.set(`Eco_${GuildID}_${UserID}`, Number(Amount));

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            SettedMoney: Amount,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Line: `Now <@${UserID}> Have ${Amount}!`,
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
        await MoneyChecker(OldMoney, "OldMoney");

        await db.add(`Eco_${GuildID}_${UserID}`, Number(Amount));

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: Amount,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Line: `Added ${Amount} To <@${UserID}>!`,
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

        if (Amount > OldMoney) throw new Error(`User Does Not Have That Much Money!`);

        await db.substr(`Eco_${GuildID}_${UserID}`, Number(Amount));

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            RemovedMoney: Amount,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Line: `Removed ${Amount} From <@${UserID}>!`,
            TimeStamp: new Date()
        };

        return Data;
    },
    Give: async function (GuildID, UserID, User2ID, Amount) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID (Sender Of Money)!`);
        await IDCheck(UserID, "User");
        if (!User2ID) throw new Error(`Please Give User 2 ID (Money You Sending To)!`);
        await IDCheck(User2ID, "User2");
        if (!Amount) throw new Error(`Please Give Amount!`);
        await AmountCheck(Amount);

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";
        await MoneyChecker(OldMoney, "OldMoney");

        if (Amount > OldMoney) throw new Error(`User Does Not Have That Much Money!`);

        await db.substr(`Eco_${GuildID}_${UserID}`, Number(Amount));
        await db.add(`Eco_${GuildID}_${User2ID}`, Number(Amount));

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: Amount,
            RemovedMoney: Amount,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Line: `Removed ${Amount} From <@${UserID}> & Added ${Amount} To <@${User2ID}>`,
            TimeStamp: new Date()
        };

        return Data;
    },
    Work: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");

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
            "Epic Gamer",
            "Manager",
            "Youtuber",
            "Teacher",
            "President",
            "Editor",
            "Traveler",
            "Doctor",
            "God",
            "Painter",
            "Actor/Actress",
            "Anime Maker (Overpowered)",
            "Legendary Warrior",
            "Legendary Emoji",
            "**__Ultra Legendary Superior God Of Everything__**",
        ];

        let RandomWork = Works[Math.floor(Math.random() * Works.length)];

        let Money;
        if (RandomWork.toLowerCase() === "legendary emoji") {
            Money = `1200`;
        } else if (RandomWork.toLowerCase() === "anime maker (overpowered)") {
            Money = `800`;
        } else if (RandomWork.toLowerCase() === "**__ultra legendary superior god of everything__**") {
            Money = `600`;
        } else {
            Money = await RandomNumber("451");
        };

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";
        await MoneyChecker(OldMoney, "OldMoney");

        await db.add(`Eco_${GuildID}_${UserID}`, Number(Money));

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
            Line: `You Worked As A ${RandomWork} & Got ${Money}`,
            TimeStamp: new Date()
        };

        return Data;
    },
    Beg: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");

        let Gen = await RandomNumber(`501`);

        let NoMoney = [
            "No Money For You",
            "404 Error: No Money",
            "Money Got Deleted, Try Again Later!",
            "No Money Thing Exists In Device ❌",
            `Something Went Wrong, Try Again Later!`,
            "Josh: No Money For You!",
            "Kall: **Stop Begging!**",
            `Stranger: Go Brrrrrrr!`,
            `**For Money, You Need To Work Hard** - Someone`
        ];

        let Moneyed = [
            `Legendary Emoji: Need Money? No Problem! Take 1000!`,
            `Person: Here ${Gen} ;)`,
            `You Asked For Money To Your Mom & Got ${Gen}`,
            `You Just Checked Your Pocket & You Found ${Gen}`,
            `You Just Found ${Gen} From Your Purse!`
        ]

        let Begs = [
            NoMoney[0],
            NoMoney[1],
            NoMoney[2],
            NoMoney[3],
            NoMoney[4],
            NoMoney[5],
            NoMoney[6],
            NoMoney[7],
            NoMoney[8],
            Moneyed[0],
            Moneyed[1],
            Moneyed[2],
            Moneyed[3],
            Moneyed[4]
        ];

        let Be = Begs[Math.floor(Math.random() * Begs.length)];

        let Money;
        if (NoMoney.some(N => Be.includes(N))) {
            Money = 0;
        } else if (Moneyed.some(N => Be.includes(N))) {
            Money = Gen;
        } else {
            Money = 0;
        };

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";
        await MoneyChecker(OldMoney, "OldMoney");

        if (Money > 0) {
            await db.add(`Eco_${GuildID}_${UserID}`, Number(Money));
        };

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: Money,
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            BegLine: Be,
            Line: Be,
            TimeStamp: new Date()
        };

        return Data;
    },
    Slots: async function (GuildID, UserID, Amount) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");
        if (!Amount) throw new Error(`Please Give Amount!`);
        await AmountCheck(Amount);

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) OldMoney = "0";
        await MoneyChecker(OldMoney, "OldMoney");

        if (isNaN(OldMoney)) throw new Error(`User Money Is Not A Number!`);

        if (OldMoney < 100) throw new Error(`Need 100 To Play Slots!`);

        if (Amount > OldMoney) throw new Error(`User Need More Money To Play Slots!`);

        let Orders = [
            "🍎",
            "🍈",
            "🍒"
        ];

        let Randoms = Orders.sort(() => 0.5 - Math.random());

        let Order = Orders.toString();

        let Random = Randoms.toString();

        let Gen = await RandomNumber(OldMoney);

        let Checker;
        if (Order === Random) {
            Checker = {
                Slot: Order,
                Failed: false
            }
        } else {
            Checker = {
                Slot: Random,
                Failed: true
            }
        };

        if (Checker.Failed === false) {
            await db.add(`Eco_${GuildID}_${UserID}`, Number(Gen));
        } else {
            await db.substr(`Eco_${GuildID}_${UserID}`, Number(Amount));
        };

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: Checker.Failed === false ? Gen : "0",
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Slot: Checker.Slot,
            Failed: Checker.Failed,
            Line: `You ${Checker.Failed === true ? `Lost - ${Amount}` : `Won - ${Gen}`}`,
            TimeStamp: new Date()
        };

        return Data;
    },
    Bet: async function (GuildID, UserID, Amount) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");
        if (!Amount) throw new Error(`Please Give Amount!`);
        await AmountCheck(Amount);

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) {
            throw new Error(`Need Some Money To Play Bet!`);
        };
        await MoneyChecker(OldMoney, "OldMoney");

        if (OldMoney < Amount) throw new Error(`User Need More Money Because Amount Is Higher!`);

        let Arr = [true, false];

        let Array = Arr[Math.floor(Math.random() * Arr.length)];

        let Gened = Amount + 1;

        let Gen = await RandomNumber(Gened);

        let Checker;

        if (Array === true) {
            Checker = {
                Got: Gen,
                Failed: false
            };
        } else {
            Checker = {
                Removed: Amount,
                Failed: true
            };
        };

        if (Array === false) {
            await db.substr(`Eco_${GuildID}_${UserID}`, Number(Amount));
        } else {
            await db.add(`Eco_${GuildID}_${UserID}`, Number(Checker.Got));
        };

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: Checker.Failed === false ? Checker.Got : "0",
            RemovedMoney: Checker.Failed === true ? Checker.Removed : "0",
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Failed: Checker.Failed,
            Line: `You ${Checker.Failed === true ? `Lost - ${Amount}` : `Won - ${Checker.Got}`}`,
            TimeStamp: new Date()
        };

        return Data;
    },
    BetAll: async function (GuildID, UserID) {
        if (!GuildID) throw new Error(`Please Give Guild ID!`);
        await IDCheck(GuildID, "Guild");
        if (!UserID) throw new Error(`Please Give User ID!`);
        await IDCheck(UserID, "User");

        let OldMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (OldMoney === null) {
            throw new Error(`Need Some Money To Play BetAll!`);
        };

        let Arr = [true, false];

        let Array = Arr[Math.floor(Math.random() * Arr.length)];

        let Gened = await Number(OldMoney + 1);

        let Gen = await RandomNumber(Gened);

        let Checker;

        if (Array === true) {
            Checker = {
                Got: Gen,
                Failed: false
            };
        } else {
            Checker = {
                Removed: OldMoney,
                Failed: true
            };
        };

        if (Array === false) {
            await db.set(`Eco_${GuildID}_${UserID}`, null);
        } else {
            await db.add(`Eco_${GuildID}_${UserID}`, Number(Checker.Got));
        };

        let NewMoney = await (await GetMoney(GuildID, UserID, db)).Money;
        if (NewMoney === null) NewMoney = "0";

        let Data = {
            GuildID: GuildID,
            UserID: UserID,
            AddedMoney: Checker.Failed === false ? Checker.Got : "0",
            RemovedMoney: Checker.Failed === true ? Checker.Removed : "0",
            OldMoney: OldMoney,
            NewMoney: NewMoney,
            Failed: Checker.Failed,
            Line: `You ${Checker.Failed === true ? `Lost - ${NewMoney}` : `Won - ${Checker.Got}`}`,
            TimeStamp: new Date()
        };

        return Data;
    }
};
