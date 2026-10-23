
class StageEffectCard extends Card {

    effects = [""];

    //  コンストラクタ
    constructor(id = "", series = "", rarity = "", name = "", idols = [], descriptions = [], functions = [], effects = [], remarks = []) {
        super(id, series, rarity, "演出セット", name, idols, descriptions, functions, [], remarks);

        if (this.descriptions.length == 0) {

            this.descriptions = ["このカードを使用するとクリエイトライブで使用する演出を変更できます。"];
        }

        this.effects = effects;
    }
}
