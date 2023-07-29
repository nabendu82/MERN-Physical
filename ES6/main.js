//const 
// const firstAge = 6;
// firstAge = 8;

// const childAges = [4, 6, 7, 10];
// childAges = [4, 6, 7, 10, 12];
// childAges.push(12);
// console.log(childAges);

// const personObj = { name: 'Nabendu', skill: 'JS' };
// personObj.skill = 'React';
// personObj.profession = 'Developer';
// console.log(personObj);

//Default parameter
// const isEqual = (num1, num2=20) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 === num2;
// }

// console.log(isEqual(10));
// console.log(isEqual(10, 10));

//Object Literals Extensions
// let myName = 'Nabendu';
// let age = 41;

// let normalObj = {
//     myName,
//     age
// }

// console.log(normalObj);

//Dynamic Fields
// let ageField = 'age';

// let dynamicObj = {
//     myName: "Nabendu",
//     [ageField]: 41
// }

// console.log(dynamicObj)

//Rest Operators
// let arrFunc = (...arr) => {
//     console.log(arr)
// }

// arrFunc(23, 67, 34, 23, 45, 78);

// let restFunc = (a, b, ...n) => {
//     console.log(a);
//     console.log(b);
//     console.log(n)
// }

// restFunc(23, 67, 34, 23, 45, 78, 98);

//Call by reference issue
// let x = [67, 34, 23, 45, 78];
// let y = x;
// y.push(99);
// console.log(y);
// console.log(x);

//Solution with spread
let c = [23, 67, 34, 23, 45, 78, 98];
let d = [...c];
d.push(99);
console.log(d);
console.log(c);

//Merge array
let x1 = [34, 23], x2 = [78, 98], x3 = [24, 45];
let d1 = [...x1, ...x2, ...x3]
console.log(d1);

//Spread operator in Objects
let obj1 = {foo: 'bar', x: 42}, obj2 = {foo: 'baz', y: 13}
let clonedObj = { ...obj1 };
console.log(clonedObj);
let mergedObj = {...obj1, ...obj2};
console.log(mergedObj);

//Array destructuring
const rgb = [255, 200, 0];
// const r = rgb[0];
// const g = rgb[1];
// const b = rgb[2];

const [r, g, b] = rgb;
console.log(r, g, b);

//Object destructuring
const developer = {
    firstName: "Nabendu",
    lastName: "Biswas",
    country: "India"
}

// const firstName = developer.firstName;
// const lastName = developer.lastName;
// const country = developer.country;

const {firstName, lastName, country} = developer;

console.log(firstName, lastName, country);



