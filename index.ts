// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
//An array of 10 students with name and surname age and grade
let students =[
  {studentName:"Dineo", studentSurname:"phala", age:12,grade:"Grade12"},
  {studentName:"Tlou", studentSurname:"Mash", age:23,grade:"Grade12"},
  {studentName:"Rose", studentSurname:"More", age:22,grade:"Grade10"},
  {studentName:"Koposi", studentSurname:"Mai", age:25,grade:"Grade11"},
  {studentName:"Bontle", studentSurname:"Moe", age:17,grade:"Grade8"},
  {studentName:"Dipuo", studentSurname:"Kek", age:26,grade:"Grade9"},
  {studentName:"Nipho", studentSurname:"Nyan", age:14,grade:"Grade11"},
  {studentName:"Kagiso", studentSurname:"More", age:14,grade:"Grade12"},
  {studentName:"Oageng", studentSurname:"Mab", age:17,grade:"Grade9"},
  {studentName:"Hanah", studentSurname:"Jak", age:19,grade:"Grade8"}
  ];

//Function to count student less than 10 years of age
function  countStu( students  ){
let counter = 0;

for (let i =0; i <students.length; i++){
if (students[i].age >0) counter++;}
return counter;

}
//result

console.log(countStu(students));