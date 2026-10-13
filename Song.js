
class Song {

    id;

    name = "";

    bonusText = "";

    bonusRates = new BonusRates();

    idolsText = "全員";

    update = new Date("2025/03/26");

    attentions = [""];

    remarks = [""];

    //  コンストラクタ
    constructor(id, name = "", bonusText = "", idolsText = "全員", updateText = "2025/03/26", remarks = []) {

        this.id = id;

        this.name = name;

        this.bonusText = bonusText;

        let songBonus = listSongBonus.find(item => item.text === bonusText);

        if (songBonus !== undefined) {

            this.bonusRates = songBonus.bonusRates;
        } else {

            this.attentions.push("※ 楽曲ボーナス値未定義");
        }

        this.idolsText = idolsText;

        this.update = new Date(updateText);

        this.remarks = remarks;
    }
}
