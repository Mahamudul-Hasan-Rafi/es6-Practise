class Student{

    constructor(id,name){
        this.id=id;
        this.name=name;
        this.school="Uttara High School";
    }

}

const student1 = new Student(101, "Rafi");
const student2 = new Student(105,"Habib");
const student3 = new Student(106,"Sajid");

console.log(student1);
console.log(student2.id);
console.log(student3.name);