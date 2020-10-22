module.exports = {
    IDCheck: async function (ID, Type) {
        if (!ID) throw new Error(`Please Give ID That You Want To Check!`);
        if (isNaN(ID)) throw new Error(`Please Give Valid ${Type} ID!`);
        if (ID.length > 18 || ID.length < 18) throw new Error(`Please Give Valid ${Type} ID!`);
        if (!Type) throw new Error(`Please Give Your ID Type!`);

        let Data = {
            Type: Type,
            Response: "String",
            ID: ID,
            Done: true
        };

        return Data;
    },
    AmountCheck: async function (Amount) {
        if (!Amount) throw new Error(`Please Give Amount That You Want To Check!`);
        if (isNaN(Amount)) throw new Error(`Please Give Valid Amount!`);

        if (Amount > 100000000000000 || Amount.length > 15) throw new Error(`Amount Limits\nAmount - 100000000000000 (Can't Add Or Remove More)\nLength - 15`);

        let Data = {
            Type: "Amount",
            Response: "String",
            Amount: Amount,
            Done: true
        };

        return Data;
    },
    GetMoney: async function (GuildID, UserID, Db) {
        if (!GuildID) throw new Error(`Please Give ID Of Guild!`);
        if (isNaN(GuildID)) throw new Error(`Please Give Valid Guild ID!`);
        if (GuildID.length > 18 || UserID.length < 18) throw new Error(`Please Give Valid Guild ID!`);
        if (!UserID) throw new Error(`Please Give ID Of User!`);
        if (isNaN(UserID)) throw new Error(`Please Give Valid User ID!`);
        if (UserID.length > 18 || UserID.length < 18) throw new Error(`Please Give Valid User ID!`);
        if (!Db) throw new Error(`Please Give Your Database Variable!`);

        let Money = await Db.fetch(`Eco_${GuildID}_${UserID}`);

        let Data = {
            Type: "Money",
            Response: "Number",
            Money: Money,
            Done: true
        };

        return Data;
    },
    CoolDownCheck: async function (UserID, Default, Line, Db) {
        if (!UserID) throw new Error(`Please Give ID Of User!`);
        if (!Db) throw new Error(`Please Give Your Database Variable!`);
        if (!Default) throw new Error(`Please Give Your Default Time In Ms!`);
        if (isNaN(Default)) throw new Error(`Please Give Valid Default Time In Ms!`);
        if (!Line) throw new Error(`Please Give Your Database Line!`);

        let db = Db;

        let Data = await db.fetch(`${Line}_${UserID}`);

        if (Data.CoolDown && Data.CoolDown === true) {
            let Cooldowned = {
                UserID: UserID,
                CoolDown: true,
                CoolDownDate: (Default - (Date.now() - Data.CoolDownTime)).toDateString(),
                CoolDownTime: (Default - (Date.now() - Data.CoolDownTime)).toTimeString(),
                Date: new Date().toDateString(),
                Time: new Date().toTimeString(),
                TimeStamp: new Date()
            };
            
            return Cooldowned;
        };

        let Checked = {
            UserID: UserID,
            CoolDown: false,
            Date: new Date().toDateString(),
            Time: new Date().toTimeString(),
            TimeStamp: new Date()
        };

        return Checked;

        /*
            let Seted = {
            UserID: UserID,
            CoolDown: true,
            CoolDownTime: new Date(),
            Date: new Date().toDateString(),
            Time: new Date().toTimeString(),
            TimeStamp: new Date()
        };

        await db.set(`${Line}_${UserID}`, Seted);

        setTimeout(async () => {
            await db.set(`${Line}_${UserID}`, null);
        }, 86400000);
        */
    },
    RandomNumber: async function (Amount) {
        if (!Amount) throw new Error(`Please Give Amount!`);
        if (isNaN(Amount)) throw new Error(`Please Give A Valid Amount!`);

        return Math.floor(Math.random() * Amount);
    }
};