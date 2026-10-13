
class CostumeBonus {

    id;

    text = "";

    bonusRates = new BonusRates();

    bonusRatesEx = new BonusRates();

    //  コンストラクタ
    constructor(id, text = "", bonusRates = new BonusRates(), bonusRatesEx = new BonusRates()) {

        this.id = id;

        this.text = text;

        this.bonusRates = bonusRates;

        this.bonusRatesEx = bonusRatesEx;
    }
}
