
class costume {

    //  コンストラクタ
    constructor(id, text, appeal, bonus_text, level_max, equipable_text) {

        this.id = id;

        this.text = text;

        this.appeal_base = appeal;

        this.bonus_text = bonus_text;

        var costume_bonus = costume_bonus_list.find(item => item.text === bonus_text);

        this.bonus_rates = costume_bonus.bonus_rates;

        this.bonus_ex_rates = costume_bonus.bonus_ex_rates;

        this.level_max = level_max;

        this.equipable_text = equipable_text;
    }
}
