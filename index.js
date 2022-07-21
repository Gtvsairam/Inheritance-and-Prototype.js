console.log("hello world!!");

//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

const parent ={
    calculateAge(){
        console.log(`my name is ${this.fName} ${this.lName} and my age is ${2022 - this.dob}`);
    }
}
const obj1 = Object.create(parent);
obj1.fName = "GTV";
obj1.lName = "Sairam";
obj1.dob = "1997";
obj1.calculateAge();

const obj2 = Object.create(parent);
obj2.fName = "Akash";
obj2.lName = "meena";
obj2.dob = "1996";
obj2.calculateAge();


//Write code to explain prototype chaining

const personProto = {
    caclculateAge (){
        console.log(`my name is ${this.fname} ${this.lname} and current age is ${2022 - this.byear} `);
    },

initialise(fname,lname,byear) {
    this.fname = fname;
    this.lname = lname;
    this.byear = byear
}
};

const Sairam = Object.create(personProto);
console.log(Sairam);
Sairam.initialise("Rambo","Andrich",1997);
Sairam.caclculateAge();

const StudentProto = Object.create(personProto);

StudentProto.initial = function (fname, lname, byear, course){
    personProto.initialise.call(StudentProto,fname,lname,byear);
    this.course = course;

}
StudentProto.introduce =function(){
    console.log(`Student name is ${this.fname} ${this.lname} and is pursuing course as ${this.course}`);
}

const Student =Object.create(StudentProto);
Student.initial("Sairam","Gunapu",1997,"Fullstack Developer");
Student.introduce();
Student.caclculateAge();



//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

function arraysum(a){
    let sum=0;
    for(let i in a) { 
        sum += a[i];
    }
    return sum;
}
let array = [1,3,6,9]; 
let totalSum= arraysum(array);
console.log(totalSum);

//Write a JavaScript function to retrieve all the names of object's own and inherited properties.


function item1(fName,  gender,age,nationality ) {
    this.fName = fName;
    this.gender = gender;
    this.age = age;
    this.nationality = nationality;
}
  
item1.prototype.nationality = "german";
const item2 = new item1 ("Sairam", " male", "24", "indian");
console.log(item2);






