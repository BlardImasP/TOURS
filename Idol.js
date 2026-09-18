
class idol {

    id;

    name;

    brand;

    sex;

    age;

    blood_type;

    date_of_birth;

    zodiac_sign;

    birthplace;

    hobbies;

    update;

    remarks;

    //  コンストラクタ
    constructor(id, name, brand, sex, age, blood_type, date_of_birth, birthplace, hobbies, update_text, remarks) {

        this.id = id;

        this.name = name;

        this.brand = brand;

        this.sex = sex;

        this.age = age;

        this.blood_type = blood_type;

        this.date_of_birth = date_of_birth;

        this.birthplace = birthplace;

        this.hobbies = hobbies;

        this.update = new Date(update_text);

        this.remarks = remarks;
    }
}
