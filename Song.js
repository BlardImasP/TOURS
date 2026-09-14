
class song {

    //  コンストラクタ
    constructor(id, text, bonus_text) {

        this.id = id;

        this.text = text;

        this.bonus_text = bonus_text;

        var song_bonus = song_bonus_list.find(item => item.text === bonus_text);

        this.bonus_rates = song_bonus.bonus_rates;
    }
}
