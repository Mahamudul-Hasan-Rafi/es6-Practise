class CSE_Department{
    constructor(){
        this.department="Computer Science & Engineering";
    }
    getFloorNo(){
        return 'Floor No:  706';
    }
}

class Faculty extends CSE_Department{
    constructor(name){
        super();
        this.name=name;
    }
    getRank(){
        return "Professor";
    }
}

const dept = new CSE_Department();
console.log(dept);

const faculty1 = new Faculty("Faisal Sir");
console.log(faculty1);
console.log(faculty1.getRank());