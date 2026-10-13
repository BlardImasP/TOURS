
class SupportCard extends Card {

    targetIdols = [""];

    bonusRates = new BonusRates();

    //  コンストラクタ
    constructor(id = "", series = "", rarity = "", name = "", idols = [], descriptions = [], targetIdols = [], functions = [], appealBonusText = "", remarks = []) {
        super(id, series, rarity, "サポート", name, idols, descriptions, functions, [], remarks);

        this.targetIdols = targetIdols;

        const appealBonus = listAppealBonus.find((appealBonus) => appealBonus.text == appealBonusText);

        if (appealBonus !== undefined) {

            this.bonusRates = appealBonus.bonusRates;
        } else {

            this.attentions.push("※ アピールボーナス値未定義");
        }
    }
}
