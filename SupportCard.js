
class support_card extends card {

    target_idols = [""];

    bonus_rates = new bonus_rates();

    //  コンストラクタ
    constructor(id = "", series = "", rarity = "", name = "", idols = [], descriptions = [], target_idols = [], functions = [], appeal_bonus_text = "", remarks = []) {
        super(id, series, rarity, "サポート", name, idols, descriptions, functions, [], remarks);

        this.target_idols = target_idols;

        const appeal_bonus = appeal_bonus_list.find((appeal_bonus) => appeal_bonus.text == appeal_bonus_text);

        if (appeal_bonus !== undefined) {

            this.bonus_rates = appeal_bonus.bonus_rates;
        } else {

            this.attentions.push("※ アピールボーナス値未定義");
        }
    }
}
