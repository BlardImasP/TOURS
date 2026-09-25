
class appeal {

    vo;

    da;

    vi;

    //  コンストラクタ
    constructor(vo, da, vi) {

        this.vo = vo;

        this.da = da;

        this.vi = vi;
    }

    setAppeal(appeal) {

        this.vo = appeal.vo;

        this.da = appeal.da;

        this.vi = appeal.vi;

        return this;
    }

    addAppeal(appeal) {

        this.vo += appeal.vo;

        this.da += appeal.da;

        this.vi += appeal.vi;

        return this;
    }

    multiply(value) {

        this.vo *= value;

        this.da *= value;

        this.vi *= value;

        return this;
    }

    divide(value) {

        this.vo /= value;

        this.da /= value;

        this.vi /= value;

        return this;
    }

    multiplyRates(rates) {

        this.vo *= rates.rate_vo;

        this.da *= rates.rate_da;

        this.vi *= rates.rate_vi;

        return this;
    }
}
