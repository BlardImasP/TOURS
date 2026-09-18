
class song {

    id;

    name;

    bonus_text;

    bonus_rates;

    idols_text;

    update;

    //  コンストラクタ
    constructor(id, name, bonus_text, idols_text, update_text) {

        this.id = id;

        this.name = name;

        this.bonus_text = bonus_text;

        let song_bonus = song_bonus_list.find(item => item.text === bonus_text);

        this.bonus_rates = song_bonus.bonus_rates;

        this.idols_text = idols_text;

        this.update = new Date(update_text);
    }
}
