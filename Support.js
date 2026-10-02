
class support extends card {

    target_idols = [""];

    bonus_rates = new bonus_rates();

    //  コンストラクタ
    constructor(id = "", series = "", rarity = "", name = "", idols = [], descriptions = [], target_idols = [], functions = [], bonus_rates_text = "", remarks = []) {
        super(id, series, rarity, "サポート", name, idols, descriptions, functions, [], remarks);

        this.target_idols = target_idols;

        switch (bonus_rates_text) {

            case "アピール値(Vo,Da,Vi)上昇(極大)":
                this.bonus_rates = new bonus_rates(52.5, 52.5, 52.5);
                break;

            case "アピール値(Vo,Da)上昇(極大)":
                this.bonus_rates = new bonus_rates(67.0, 67.0, 0);
                break;

            case "アピール値(Vo,Vi)上昇(極大)":
                this.bonus_rates = new bonus_rates(67.0, 0, 67.0);
                break;

            case "アピール値(Da,Vi)上昇(極大)":
                this.bonus_rates = new bonus_rates(0, 67.0, 67.0);
                break;

            case "アピール値(Vo)上昇(極大)":
                this.bonus_rates = new bonus_rates(120.0, 0, 0);
                break;

            case "アピール値(Da)上昇(極大)":
                this.bonus_rates = new bonus_rates(0, 120.0, 0);
                break;

            case "アピール値(Vi)上昇(極大)":
                this.bonus_rates = new bonus_rates(0, 0, 120.0);
                break;

            case "アピール値(Vo,Da,Vi)上昇(大)":
                this.bonus_rates = new bonus_rates(36.75, 36.75, 36.75);
                break;

            case "アピール値(Vo,Da)上昇(大)":
                this.bonus_rates = new bonus_rates(46.9, 46.9, 0);
                break;

            case "アピール値(Vo,Vi)上昇(大)":
                this.bonus_rates = new bonus_rates(46.9, 0, 46.9);
                break;

            case "アピール値(Da,Vi)上昇(大)":
                this.bonus_rates = new bonus_rates(0, 46.9, 46.9);
                break;

            case "アピール値(Vo)上昇(大)":
                this.bonus_rates = new bonus_rates(84.0, 0, 0);
                break;

            case "アピール値(Da)上昇(大)":
                this.bonus_rates = new bonus_rates(0, 84.0, 0);
                break;

            case "アピール値(Vi)上昇(大)":
                this.bonus_rates = new bonus_rates(0, 0, 84.0);
                break;

            case "アピール値(Vo,Da,Vi)上昇(中)":
                this.bonus_rates = new bonus_rates(25.725, 25.725, 25.725);
                break;

            case "アピール値(Vo,Da)上昇(中)":
                this.bonus_rates = new bonus_rates(32.830, 32.830, 0);
                break;

            case "アピール値(Vo,Vi)上昇(中)":
                this.bonus_rates = new bonus_rates(32.830, 0, 32.830);
                break;

            case "アピール値(Da,Vi)上昇(中)":
                this.bonus_rates = new bonus_rates(0, 32.830, 32.830);
                break;

            case "アピール値(Vo)上昇(中)":
                this.bonus_rates = new bonus_rates(58.800, 0, 0);
                break;

            case "アピール値(Da)上昇(中)":
                this.bonus_rates = new bonus_rates(0, 58.800, 0);
                break;

            case "アピール値(Vi)上昇(中)":
                this.bonus_rates = new bonus_rates(0, 0, 58.800);
                break;

            case "アピール値(Vo,Da,Vi)上昇(小)":
                this.bonus_rates = new bonus_rates(18.0075, 18.0075, 18.0075);
                break;

            case "アピール値(Vo,Da)上昇(小)":
                this.bonus_rates = new bonus_rates(22.981, 22.981, 0);
                break;

            case "アピール値(Vo,Vi)上昇(小)":
                this.bonus_rates = new bonus_rates(22.981, 0, 22.981);
                break;

            case "アピール値(Da,Vi)上昇(小)":
                this.bonus_rates = new bonus_rates(0, 22.981, 22.981);
                break;

            case "アピール値(Vo)上昇(小)":
                this.bonus_rates = new bonus_rates(41.160, 0, 0);
                break;

            case "アピール値(Da)上昇(小)":
                this.bonus_rates = new bonus_rates(0, 41.160, 0);
                break;

            case "アピール値(Vi)上昇(小)":
                this.bonus_rates = new bonus_rates(0, 0, 41.160);
                break;

            case "アピール値(Vo,Da,Vi)上昇(極小)":
                this.bonus_rates = new bonus_rates(12.60525, 12.60525, 12.60525);
                break;

            case "アピール値(Vo,Da)上昇(極小)":
                this.bonus_rates = new bonus_rates(16.0867, 16.0867, 0);
                break;

            case "アピール値(Vo,Vi)上昇(極小)":
                this.bonus_rates = new bonus_rates(16.0867, 0, 16.0867);
                break;

            case "アピール値(Da,Vi)上昇(極小)":
                this.bonus_rates = new bonus_rates(0, 16.0867, 16.0867);
                break;

            case "アピール値(Vo)上昇(極小)":
                this.bonus_rates = new bonus_rates(28.812, 0, 0);
                break;

            case "アピール値(Da)上昇(極小)":
                this.bonus_rates = new bonus_rates(0, 28.812, 0);
                break;

            case "アピール値(Vi)上昇(極小)":
                this.bonus_rates = new bonus_rates(0, 0, 28.812);
                break;

            case "":
                this.bonus_rates = new bonus_rates()
                break;

            default:
                this.bonus_rates = new bonus_rates();
                this.attentions.push("※ アピールボーナス値未測定");
                break;
        }
    }
}
