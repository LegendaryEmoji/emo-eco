module.exports = { //By a dickless person
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
    MoneyChecker: async function(Amount, Type) {
        if (!Amount) throw new Error(`Please Give Amount!`);
        if (!Type) throw new Error(`Please Give Type - OldMoney, NewMoney`)
        if (isNaN(Amount)) throw new Error(`Invalid ${Type} - Data Is Not Number, Clear Database Eco Data!`);

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
        if (isNaN(Money)) throw new Error(`Invalid Type - Data Is Not Number, Clear Database Eco Data!`)

        let Data = {
            Type: "Money",
            Response: "Number",
            Money: Money,
            Done: true
        };

        return Data;
    },
    RandomNumber: async function (Amount, Amount2) {
        if (!Amount) throw new Error(`Please Give Amount!`);
        if (isNaN(Amount)) throw new Error(`Please Give A Valid Amount!`);
        if (!Amount2) return Math.floor(Math.random() * Amount);
        if (isNaN(Amount2)) throw new Error(`Please Give A Valid Amount2!`);

        return Math.floor(Math.random() * (Amount - Amount2)) + Amount;
    }
};
