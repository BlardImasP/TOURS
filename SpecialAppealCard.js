
class SpecialAppealCard extends Card {

    targetIdols = [""];

    //  コンストラクタ
    constructor(id = "", series = "", rarity = "", name = "", idols = [], descriptions = [], targetIdols = [], functions = [], remarks = []) {
        super(id, series, rarity, "SPアピール", name, idols, descriptions, functions, [], remarks);

        if (this.descriptions.length == 0) {

            this.descriptions = ["このカードを使用するとSPアピールを変更できます。"];
        }

        this.targetIdols = targetIdols;
    }
}
