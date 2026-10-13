
class Idol {

    id;

    name = "";

    brand = "";

    sex = "";

    age = "";

    typeOfBlood = "";

    dateOfBirth = "";

    zodiacSign = "";

    birthplace = "";

    hobbies = [""];

    update = "";

    remarks = [""];

    //  コンストラクタ
    constructor(id, name, brand, sex, age, typeOfBlood, dateOfBirth, birthplace, hobbies, updateText, remarks) {

        this.id = id;

        this.name = name;

        this.brand = brand;

        this.sex = sex;

        this.age = age;

        this.typeOfBlood = typeOfBlood;

        this.dateOfBirth = dateOfBirth;

        this.birthplace = birthplace;

        this.hobbies = hobbies;

        this.update = new Date(updateText);

        this.remarks = remarks;
    }
}
