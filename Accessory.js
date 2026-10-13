
class Accessory extends Equipment {

    areaNames = [""];

    //  コンストラクタ
    constructor(id, name = "", genreName = "", genreLevel = "", idolsText = "", descriptions = [], attentions = [], areaNames = [], cardIds = [], remarks = []) {
        super(id, name, genreName, genreLevel, idolsText, descriptions, [], attentions, cardIds, remarks);

        this.areaNames = areaNames;
    }
}
