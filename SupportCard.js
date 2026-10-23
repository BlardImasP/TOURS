
class SupportCard extends Card {

    targetIdols = [""];

    bonusRates = new BonusRates();

    //  コンストラクタ
    constructor(id = "", series = "", rarity = "", name = "", idols = [], descriptions = [], targetIdols = [], functions = [], remarks = []) {
        super(id, series, rarity, "サポート", name, idols, descriptions, functions, [], remarks);

        if (this.descriptions.length == 0) {

            this.descriptions = ["このカードを使用するとライブのサポートができます。"];
        }

        this.targetIdols = targetIdols;

        let indexFunctions = 0;

        while (indexFunctions < functions.length) {

            const textFunction = functions[indexFunctions];

            indexFunctions++;

            if (textFunction == "") {

                break;
            }

            listAppealBonus.forEach((appealBonus) => {

                if (textFunction.startsWith(appealBonus.text)) {

                    this.bonusRates.addBonusRates(appealBonus.bonusRates);
                }
            });
        }
    }
}
