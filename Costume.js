
class costume {

    id;

    name;

    appeal_base;

    bonus_text;

    bonus_rates;

    bonus_ex_rates;

    level_max;

    idols_text;

    genre_text;

    remarks;

    //  コンストラクタ
    constructor(id, name, appeal, bonus_text, level_max, idols_text, genre_text, remarks) {

        this.id = id;

        this.name = name;

        this.appeal_base = appeal;

        this.bonus_text = bonus_text;

        let costume_bonus = costume_bonus_list.find(item => item.text === bonus_text);

        this.bonus_rates = costume_bonus.bonus_rates;

        this.bonus_ex_rates = costume_bonus.bonus_ex_rates;

        this.level_max = level_max;

        this.idols_text = idols_text;

        this.genre_text = genre_text;

        this.remarks = remarks;
    }
}
