
class Costume extends Equipment {

    appealBase = new Appeal();

    bonusText = "";

    bonusRates = new BonusRates();

    bonusRatesEx = new BonusRates();

    levelMax = 1;

    //  コンストラクタ
    constructor(id, name = "", genreName = "", genreLevel = "", idolsText = "", descriptions = [], attentions = [], vo = 0, da = 0, vi = 0, bonusText = "", levelMax = 1, cardIds = [], remarks = []) {
        super(id, name, genreName, genreLevel, idolsText, descriptions, [], attentions, cardIds, remarks);

        this.appealBase = new Appeal(vo, da, vi);

        this.bonusText = bonusText;

        const costumeBonus = listCostumeBonus.find((item) => (item.text === bonusText));

        if (costumeBonus !== undefined) {

            this.bonusRates = costumeBonus.bonusRates;

            this.bonusRatesEx = costumeBonus.bonusRatesEx;
        } else {

            this.attentions.push("※ コスチュームボーナス値未定義");
        }

        this.levelMax = levelMax;
    }
}
