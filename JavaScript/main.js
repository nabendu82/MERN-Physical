// var firstName = 'Nabendu';
// let age = 41;
// const isDeveloper = true;
// isDeveloper = false;

// console.log(firstName);
// console.log(age);
// console.log(isDeveloper);

// function varExp(){
//     if(true){
//         var num1 = 10;
//         console.log("Inside if var " + num1);
//     }
//     console.log("Outside if var " + num1);
// }

// varExp();
// console.log("Outside fuction var " + num1);

// if(true){
//     let num2 = 20;
//     console.log("Inside if let " + num2);
// }
// console.log("Outside if let " + num2);

//Datatypes
// const firstName = 'Nabendu';
// const age = 41;
// const rating = 5.5;
// const isDeveloper = true;
// const x = null;
// let z;

// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof isDeveloper);
// console.log(typeof x);
// console.log(typeof z);

// if(typeof x == 'object'){
//     console.log('x is null');
// }

//String concatenation
// const name = 'Nabendu';
// const age = 41;

// console.log('My name is ' + name + ' and i am ' + age + ' year\'s old.');
// console.log(`My name is ${name} and i am ${age} year's old.`);

//String Methods
// const str = 'Hello JavaScript';
// const str2 = 'React'
// const num = 200000;
// const str3 = 'The quick brown fox jumps over the lazy dog.';

// console.log(str3.split(' '));
// console.log(str3.split(''));
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.includes('Java'));
// console.log(str.includes('Cobol'));
// console.log(str.substring(0,7));
// console.log(str.concat(' ', str2));
// console.log(str.concat(', ', str2));
// console.log(str.endsWith('best!'));
// console.log(str.endsWith('ript'));
// console.log(str2.startsWith('Re'));
// console.log(str2.startsWith('ript'));
// console.log(num.toString().substring(0,2));
// console.log(str.slice(6));

//Array
// const lang = ['JavaScript', 'Java', 'C++', 'Golang', 'Kotlin', 5, true];
// console.log(lang);
// console.log(lang[2]);

// lang.pop();
// lang.pop();
// console.log(lang);

// lang.push('Pascal');
// lang.unshift('Rust');
// console.log(lang);

// lang.shift();
// console.log(lang);

// console.log(Array.isArray(lang));
// console.log(Array.isArray('Java'));
// console.log(lang.includes('Java'));
// console.log(lang.includes('Cobol'));
// console.log(lang.reverse());

//Objects
// const person = {
//     firstName: 'Nabendu',
//     lastName: 'Biswas',
//     age: 41,
//     isDeveloper: true,
//     hobbies: ['coding', 'blogging', 'teaching'],
//     address: {
//         hno: 95,
//         city: 'Bhopal',
//         state: 'MP'
//     }
// }

// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// person.firstName = 'Mousam';
// console.log(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));

//For loop
// for(let i=0; i<=10; i++) {
//     console.log(`Loop Number - ${i}`);
// }

//While loop
// let i=0;
// while(i<=10){
//     console.log(`Loop Number - ${i}`);
//     i++;
// }

//do-while loop
// let i=0;
// do{
//     console.log(`Loop Number - ${i}`);
//     i+=11;
// }while(i<=10);

//Array of Objects
// const posts = [
//     {
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum"
//     },
//     {
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis"
//     },
//     {
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//     }
// ];

// //Traditional for loop
// for(let i=0; i<posts.length; i++){
//     console.log(posts[i].id)
// }

// //for..of loop
// for(let p of posts) {
//     console.log(p.title)
// }

// //forEach
// posts.forEach(p => console.log(p.body))

//Conditionals

//if statement
// const x = '10';

// if(x == 10){
//     console.log('x is 10');
// }

//if-else statement
// const y = '20';

// if(y === 20){
//     console.log('y is 20');
// } else {
//     console.log('y is string 20');
// }

//if-else if-else statement
// const z = 79;

// if(z > 100){
//     console.log('z is greater then 100');
// } else if(z > 80) {
//     console.log('z is greater then 80');
// } else if(z > 60) {
//     console.log('z is greater then 60');
// } else if(z > 40) {
//     console.log('z is greater then 40');
// } else if(z > 20) {
//     console.log('z is greater then 20');
// } else {
//     console.log('z is lesser then 20');
// }

//OR an AND operators
// const x = 20;
// const y = 30;

// if(x === 20 || y === 40) {
//     console.log('Any one of them is true')
// }

// if(x === 20 && y === 30) {
//     console.log('Both of them are true')
// }

//Ternary operator
// const z = 10;
// let color;

// if(z > 10){
//     color = 'red';
// } else {
//     color = 'blue';
// }

// console.log(color);

// let color2 = z > 9 ? 'red' : 'blue';
// console.log(color2);

//switch statement
// const color = 'yellow';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'green':
//         console.log('color is green');
//         break;
//     case 'yellow':
//         console.log('color is yellow');
//         break;
//     case 'purple':
//         console.log('color is purple');
//         break;
//     default:
//         console.log('No color was matched');
// }

//Functions

//Method#1 - Function decleration
function addNums(num1, num2){
    console.log(num1 + num2);
}

addNums(45, 23);

//Method#2 - Function expressions
const multiNums = function(num1, num2){
    return num1 * num2;
}

console.log(multiNums(45, 23));

//Method#3 - Arrow function
const modNums = (num1, num2) => {
    return num1 % num2;
}

console.log(modNums(45, 23));

//Method#4 - Condensed arrow function
const divNums = num1 => num1 / 21;

console.log(divNums(45));
