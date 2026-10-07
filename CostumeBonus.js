
class costume_bonus {

    id;

    text = "";

    bonus_rates;

    bonus_ex_rates;

    //  コンストラクタ
    constructor(id, text = "", bonus_rates = new bonus_rates(), bonus_ex_rates = new bonus_rates()) {

        this.id = id;

        this.text = text;

        this.bonus_rates = bonus_rates;

        this.bonus_ex_rates = bonus_ex_rates;
    }
}
