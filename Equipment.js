
class Equipment {

    id = 0;

    name = "";

    genreName = "";

    colorGenre = "";

    genreLevel = "";

    idolsText = "";

    descriptions = [""];

    functions = [""];

    attentions = [""];

    cardIds = [""];

    remarks = [""];

    //  コンストラクタ
    constructor(id, name = "", genreName = "", genreLevel = "", idolsText = "", descriptions = [], functions = [], attentions = [], cardIds = [], remarks = []) {

        this.id = id;

        this.name = name;

        this.genreName = genreName;

        const genre = listGenre.find((item) => (item.name === genreName));

        if (genre !== undefined) {

            this.colorGenre = genre.colorText;
        }

        this.genreLevel = genreLevel;

        this.idolsText = idolsText;

        this.descriptions = descriptions;

        this.functions = functions;

        this.attentions = attentions;

        this.cardIds = cardIds;

        this.remarks = remarks;
    }
}
