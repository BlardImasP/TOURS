
class support {

    id = "";

    season = "";

    rarity = "";

    name = "";

    idols = [""];

    descriptions = [""];

    target_idols = [""];

    functions = [""];

    bonus_rates = new bonus_rates();

    attentions = [];

    remarks = [""];

    //  コンストラクタ
    constructor(id = "", season = "", rarity = "", name = "", idols = [], descriptions = [], target_idols = [], functions = [], bonus_rates_text = "", remarks = []) {

        this.id = id;

        this.season = season;

        this.rarity = rarity;

        this.name = name;

        this.idols = idols;

        this.descriptions = descriptions;

        this.target_idols = target_idols;

        this.functions = functions;

        switch (bonus_rates_text) {

            case "アピール値(Vo,Da,Vi)上昇(極大)":
                this.bonus_rates = new bonus_rates(52500, 52500, 52500);
                break;

            case "アピール値(Vo)上昇(極大)":
                this.bonus_rates = new bonus_rates(120000, 0, 0);
                break;

            case "アピール値(Da)上昇(極大)":
                this.bonus_rates = new bonus_rates(0, 120000, 0);
                break;

            case "アピール値(Vi)上昇(極大)":
                this.bonus_rates = new bonus_rates(0, 0, 120000);
                break;

            case "アピール値(Vo)上昇(大)":
                this.bonus_rates = new bonus_rates(84000, 0, 0);
                break;

            case "アピール値(Da)上昇(大)":
                this.bonus_rates = new bonus_rates(0, 84000, 0);
                break;

            case "アピール値(Vi)上昇(大)":
                this.bonus_rates = new bonus_rates(0, 0, 84000);
                break;

            case "アピール値(Vo,Da)上昇(中)":
                this.bonus_rates = new bonus_rates(32825, 32825, 0);
                break;

            case "アピール値(Vo,Vi)上昇(中)":
                this.bonus_rates = new bonus_rates(32825, 0, 32825);
                break;

            case "アピール値(Da,Vi)上昇(中)":
                this.bonus_rates = new bonus_rates(0, 32825, 32825);
                break;

            case "アピール値(Vo)上昇(中)":
                this.bonus_rates = new bonus_rates(58800, 0, 0);
                break;

            case "アピール値(Da)上昇(中)":
                this.bonus_rates = new bonus_rates(0, 58800, 0);
                break;

            case "アピール値(Vi)上昇(中)":
                this.bonus_rates = new bonus_rates(0, 0, 58800);
                break;

            case "アピール値(Vo)上昇(小)":
                this.bonus_rates = new bonus_rates(41200, 0, 0);
                break;

            case "アピール値(Da)上昇(小)":
                this.bonus_rates = new bonus_rates(0, 41200, 0);
                break;

            case "アピール値(Vi)上昇(小)":
                this.bonus_rates = new bonus_rates(0, 0, 41200)
                break;

            case "":
                this.bonus_rates = new bonus_rates()
                break;

            default:
                this.bonus_rates = new bonus_rates();
                this.attentions.push("※ アピールボーナス値未測定");
                break;
        }

        this.remarks = remarks;
    }
}
