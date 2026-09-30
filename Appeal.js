
class appeal {

    vo = 0;

    da = 0;

    vi = 0;

    //  コンストラクタ
    constructor(vo = 0, da = 0, vi = 0) {

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

    add(value) {

        this.vo += value;

        this.da += value;

        this.vi += value;

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

    floor() {

        this.vo = Math.floor(this.vo);

        this.da = Math.floor(this.da);

        this.vi = Math.floor(this.vi);
    }

}
