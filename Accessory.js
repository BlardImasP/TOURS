
class accessory extends equipment {

    area_names = [""];

    //  コンストラクタ
    constructor(id, name = "", genre_text = "", genre_level = "", idols_text = "", descriptions = [], attentions = [], area_names = [], card_ids = [], remarks = []) {
        super(id, name, genre_text, genre_level, idols_text, descriptions, [], attentions, card_ids, remarks);

        this.area_names = area_names;
    }
}
