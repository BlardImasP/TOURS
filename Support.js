
class support {

    id;

    season;

    rarity;

    name;

    idols;

    descriptions;

    target_idols;

    functions;

    bonus_rates;

    remarks;

    //  コンストラクタ
    constructor(id, season, rarity, name, idols, descriptions, target_idols, functions, bonus_rates, remarks) {

        this.id = id;

        this.season = season;

        this.rarity = rarity;

        this.name = name;

        this.idols = idols;

        this.descriptions = descriptions;

        this.target_idols = target_idols;

        this.functions = functions;

        this.bonus_rates = bonus_rates;

        this.remarks = remarks;
    }
}
