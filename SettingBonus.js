
class SettingBonus {

    id;

    name = "";

    functions = "";

    listCostume = [""];

    listAccessoryHead = [""];

    listAccessoryFace = [""];

    listAccessoryHand = [""];

    listAccessoryBack = [""];

    listAccessoryRump = [""];

    listAccessoryLegs = [""];

    remarks = [""];

    //  コンストラクタ
    constructor(id, name = "", functions = "", listCostume = [], listAccessoryHead = [], listAccessoryFace = [], listAccessoryHand = [], listAccessoryBack = [], listAccessoryRump = [], listAccessoryLegs = [], remarks = []) {

        this.id = id;

        this.name = name;

        this.functions = functions;

        this.listCostume = listCostume;

        this.listAccessoryHead = listAccessoryHead;

        this.listAccessoryFace = listAccessoryFace;

        this.listAccessoryHand = listAccessoryHand;

        this.listAccessoryBack = listAccessoryBack;

        this.listAccessoryRump = listAccessoryRump;

        this.listAccessoryLegs = listAccessoryLegs;

        this.remarks = remarks;
    }
}
