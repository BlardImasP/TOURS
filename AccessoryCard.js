
class AccessoryCard extends Card {

    //  コンストラクタ
    constructor(id = "", series = "", rarity = "", name = "", idols = [], descriptions = [], remarks = []) {
        super(id, series, rarity, "アクセサリー", name, idols, descriptions, [], [], remarks);

        if (this.descriptions.length == 0) {

            this.descriptions = ["このカードを使用するとアイドルにアクセサリーをつけることができます。", "※アイドル・衣装によってはつけることができないものがあります。"];
        }
    }
}
