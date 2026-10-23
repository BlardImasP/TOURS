
class BonusRates {

    rateVo = 0;

    rateDa = 0;

    rateVi = 0;

    //  コンストラクタ
    constructor(rateVo = 0, rateDa = 0, rateVi = 0) {

        this.rateVo = rateVo;

        this.rateDa = rateDa;

        this.rateVi = rateVi;
    }

    setBonusRates(rateBonus) {

        this.rateVo = rateBonus.rateVo;

        this.rateDa = rateBonus.rateDa;

        this.rateVi = rateBonus.rateVi;

        return this;
    }

    addBonusRates(rateBonus) {

        this.rateVo += rateBonus.rateVo;

        this.rateDa += rateBonus.rateDa;

        this.rateVi += rateBonus.rateVi;

        return this;
    }
}
