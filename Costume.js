
class costume extends equipment {

    appeal_base = new appeal();

    bonus_text = "";

    bonus_ratesnew = new bonus_rates();

    bonus_ex_rates = new bonus_rates();

    level_max = 1;

    //  コンストラクタ
    constructor(id, name = "", genre_text = "", genre_level = "", idols_text = "", descriptions = [], attentions = [], vo = 0, da = 0, vi = 0, bonus_text = "", level_max = 1, card_ids = [], remarks = []) {
        super(id, name, genre_text, genre_level, idols_text, descriptions, [], attentions, card_ids, remarks);

        this.appeal_base = new appeal(vo, da, vi);

        this.bonus_text = bonus_text;

        const costume_bonus = costume_bonus_list.find((item) => (item.text === bonus_text));

        if (costume_bonus !== undefined) {

            this.bonus_rates = costume_bonus.bonus_rates;

            this.bonus_ex_rates = costume_bonus.bonus_ex_rates;
        } else {

            this.attentions.push("※ コスチュームボーナス値未定義");
        }

        this.level_max = level_max;
    }
}
