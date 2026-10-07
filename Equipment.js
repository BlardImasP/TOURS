
class equipment {

    id = 0;

    name = "";

    genre_text = "";

    genre_color = "";

    genre_level = "";

    idols_text = "";

    descriptions = [""];

    functions = [""];

    attentions = [""];

    card_ids = [""];

    remarks = [""];

    //  コンストラクタ
    constructor(id, name = "", genre_text = "", genre_level = "", idols_text = "", descriptions = [], functions = [], attentions = [], card_ids = [], remarks = []) {

        this.id = id;

        this.name = name;

        this.genre_text = genre_text;

        const genre = genre_list.find((item) => (item.name === genre_text));

        this.genre_color = genre.color_text;

        this.genre_level = genre_level;

        this.idols_text = idols_text;

        this.descriptions = descriptions;

        this.functions = functions;

        this.attentions = attentions;

        this.card_ids = card_ids;

        this.remarks = remarks;
    }
}
