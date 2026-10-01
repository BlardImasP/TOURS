
class costume {

    id;

    name = "";

    appeal_base = new appeal();

    bonus_text = "";

    bonus_ratesnew = new bonus_rates();

    bonus_ex_rates = new bonus_rates();

    level_max = 1;

    idols_text = "";

    genre_text = "";

    genre_color = "";

    descriptions = [""];

    card_ids = [""];

    remarks = [""];

    //  コンストラクタ
    constructor(id, name = "", appeal_base = new appeal(), bonus_text = "", level_max = 1, idols_text = "", genre_text = "", descriptions = [], card_ids = [], remarks = []) {

        this.id = id;

        this.name = name;

        this.appeal_base = appeal_base;

        this.bonus_text = bonus_text;

        const costume_bonus = costume_bonus_list.find((item) => (item.text === bonus_text));

        this.bonus_rates = costume_bonus.bonus_rates;

        this.bonus_ex_rates = costume_bonus.bonus_ex_rates;

        this.level_max = level_max;

        this.idols_text = idols_text;

        this.genre_text = genre_text;

        const genre = genre_list.find((item) => (item.name === genre_text));

        this.genre_color = genre.color_text;

        this.descriptions = descriptions;

        this.card_ids = card_ids;

        this.remarks = remarks;
    }
}
