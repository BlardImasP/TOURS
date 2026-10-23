
class CostumeCard extends Card {

    //  コンストラクタ
    constructor(id = "", series = "", rarity = "", name = "", idols = [], descriptions = [], remarks = []) {
        super(id, series, rarity, "衣装", name, idols, descriptions, [], [], remarks);

        if (this.descriptions.length == 0) {

            this.descriptions = ["このカードを使用すると衣装を変更できます。"];
        }
    }
}
