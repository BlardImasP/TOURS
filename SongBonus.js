
class SongBonus {

    id;

    text = "";

    bonusRates = new BonusRates();

    //  コンストラクタ
    constructor(id, text = "", bonusRates = new BonusRates()) {

        this.id = id;

        this.text = text;

        this.bonusRates = bonusRates;
    }
}
