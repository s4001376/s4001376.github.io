console.log("My name is Markiplier");
// this is a comment 
let myName = "Liam Gibbons";
// let name = prompt("What is your name?");
const myCity = "Melbourne";
console.log(myName, "lives in", myCity);

console.log(`${myName}
    
    lives in
   
    ${myCity}`);

let count = 10;
console.log(count);

let isItMorningClass = true;
let isItAfternoonClass = false;

let myStudentRecord = {
    name: "Didrika",
    id: "s4001376",
    class: "0AT1013",
    isItScience: false,
    isItDesign: true,
}

console.log("Hello everyonem my name is", myStudentRecord.name);
console.log("my id is", myStudentRecord.id);
console.log("my class is", myStudentRecord.class);
console.log("am I a science student?", myStudentRecord.isItScience);

const numberArray = [2, 4, 6, 8, 10];
console.log(numberArray [2]);

if (myStudentRecord.isItScience) {
    console.log("Sorry you are in the wrong class");
} else {
    console.log("Welcome to 0ART1013");
}

let myScore = 90;
if(myScore>=90) {
    console.log("You scored a HD");
} else if (myScore <90 && myScore >=70) {
    console.log("you scored a D");
} else if (myScore <70 && myScore >=50) {
    console.log("you scored a C");
} else {
    console.log("you scored a P");
}

