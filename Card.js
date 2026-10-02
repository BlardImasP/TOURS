
class card {

    id = "";

    series = "";

    rarity = "";

    type = ""

    name = "";

    idols = [""];

    descriptions = [""];

    functions = [""];

    attentions = [""];

    remarks = [""];

    //  コンストラクタ
    constructor(id = "", series = "", rarity = "", type = "", name = "", idols = [], descriptions = [], functions = [], attentions = [], remarks = []) {

        this.id = id;

        this.series = series;

        this.rarity = rarity;

        this.type = type;

        this.name = name;

        this.idols = idols;

        this.descriptions = descriptions;

        this.functions = functions;

        this.attentions = attentions;

        this.remarks = remarks;
    }
}


