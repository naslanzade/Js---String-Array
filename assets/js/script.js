"use strict"

// let date=new Date();

// console.log(date.getFullYear() + " " + date.getMonth() + 1) + " " + date.getHours() + " " + date.getMinutes();


// if(true){
//     var age=60;
// }

// console.log(age);


// function test(){
//     var age=55;

//     console.log(age)
// }

// test();



// let address = "Ehmedli";

// console.log(address.length)


// console.log(address.includes("m"));

// search(address);

// function search(str){
//     for(let i=0; i<str.length;i++){
//         console.log(str[i]);

//     }
// }


// function search(str){
//     for(let i=0; i<str.length;i++){
//         if(address[i]=="m"){
//             return true;
//         }

//     }

//     return false;
// }

// console.log(search(address) ? "Found" : "Not Found");

// console.log(address.at(0));

// console.log(address.charAt(1));

// console.log(address.charCodeAt(0));

// document.querySelector("button").addEventListener("keydown",function (e) {
//     if(e.keyCode==38){
//         console.log("up")
//     }else if(e.keyCode==13){
//         console.log("enter")
//     }
// })

// console.log(address.slice(1,3));

// console.log(address.substring(1,3));

// console.log(address.slice(1,3));

// console.log(address.substr(1,3));


// let str = "Resul yaxshi oglandi";

// let str2 = " - Amma emameleri var";

// console.log(address.replace("E","A"));

// console.log(str.replace("oglandi","oglandir"));

// console.log(str.replaceAll("l","-"));

// console.log(str.toLowerCase());

// console.log(str.toUpperCase());

// console.log(str.toLocaleUpperCase());

// let result=str.concat(str2);

// console.log(result);

// console.log(str.trim());

// console.log(str.trimStart());

// console.log(str.trimEnd());


// console.log(str.startsWith("R"));

// let result=str.split(" ");

// for (const item of result) {
//     console.log(item);
// }




// const SUCCESS_MESSAGE="Success";

// const ERROR_MESSAGE="This email already used";


// let user = {
//     name: "Ramil",
//     surname: "Allahverdiyev",
//     email: "ramil99@code.edu.az",
//     password: "1234"
// }

// function register(user) {
//     let emailsArray = getEmail();


//     if(user.name==" "){
//         return "Enter correct format of name";
//     }

//     for (const email of emailsArray) {
//         if (user.email == email) {
//             return ERROR_MESSAGE;
//         }

//     }

//     return SUCCESS_MESSAGE;
// }


// console.log(register(user));

// function getEmail() {
//     let emails = "cavid@gmail.com,resul@gmail.com,ramil99@code.edu.az,qoshqar@mail.ru";

//     return emails.split(",");

// }


// const strToUpper = str =>{
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(strToUpper("azerbaycan"));


// let names = ["Resul", "Musa", "Murad", "Lale", "Qoshqar"];
// console.log(names[0]);

// console.log(names.length);

// console.log(names[names.length-1]);

// names.reverse();

// names.sort();

// console.log(names);

// console.log(names.join(","))


// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);

// console.log(children);

// names.push("Mahir");

// names.pop();

// names.unshift("Anar");

// names.shift();

// console.log(names);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const res = fruits.entries();

// for (const iterator of res) {
//     console.log(iterator);
// };


// let nums=[1,5,10,20,44];

// console.log(nums.every(m=>m>10));

// nums.fill(100,0,2);
// console.log(nums);

// let result=nums.find(m=>m>5);

// console.log(result);

// console.log(nums.findIndex(m=>m>10));

// let text = "ABCDEFG"
// const myArr = Array.from(text);
// console.log(myArr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango"));



// console.log(index);

// function search(searchText){
//     const fruits = ["Banana", "Orange", "Apple", "Mango"];
//     let index=fruits.indexOf(searchText);
//     if(index==-1){
//         console.log("Not found");
//         return;

//     }

//     console.log("Found")
// }

// search("Banana");

// let nums=[1,5,44,10,20,44];

// console.log(nums.lastIndexOf(44));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result =  Array.isArray(fruits);

// console.log(result);

// function checkArray(data){
//     return Array.isArray(data);
// }

// let nums=[1,5,44,10,20,44];

// console.log(checkArray(nums));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (const key of keys) {
//     console.log(key)
// };


// const numbers = [175, 50, 25];

// let result=numbers.reduce((total,current) =>total+current);

// console.log(result);

// const numbers = [175, 50, 25];

// let result=numbers.reduce((total,current) =>(total+current),100);

// console.log(result);


// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function findOddNums(arr) {

//     let oddArr = [];
//     for (const item of arr) {
//         if (item % 2 == 1) {
//             oddArr.push(item);
//         }
//     }
//     return oddArr.reduce((total, current) => total + current);
// }

// console.log(findOddNums(nums));


// function findOddNums(arr) {

//     let oddArr=arr.filter(m=>m%2==1);
//     return oddArr.reduce((total, current) => total + current);
// }

// console.log(findOddNums(nums));