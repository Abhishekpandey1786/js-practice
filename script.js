// // let marks = 32;
// // if(marks>=80){
// //     console.log("A Grade");
// // }
// // else if(marks>=75){
// //     console.log("B Grade");
// // }else if(marks>=65){
// //     console.log("C Grade");
// // }else if(marks>=45){
// //     console.log("D Grade");
// // }
// // else if(marks>=33){
// //     console.log("E Grade");
// // }
// // else{
// //     console.log("Fail");
// //     console.log("Better luck next time");
// // }

// // let i=1;
// // for(i=1; i<=5 ; i++){
// //     console.log(i);
// // } 

// // let obj={
// //     name:" j",
// //     age: 22,
// //     city: "chennai",
// //      draw :function (){
// //         console.log("hello world");
// //     }
// // }
// // console.log(obj.name);
// // console.log(obj.age)
// // console.log(obj.city);
// // obj.draw();


// // function createRectangle( len,wid){
// //     return Rectangle={
// //         length:len,
// //         breadth:wid,
// //          draw :function (){
// //         console.log("hello world");
// //        }
// //     }
// // }

// // let rectobj1= createRectangle(7,8);
// // console.log(rectobj1.name);
// // let rectobj2= createRectangle(9,11);
// // console.log(rectobj2);
// // let rectobj3= createRectangle(8,55);
// // console.log(rectobj3);


// function Rectangle(name, age){
//     this.name=name;
//     this.age= age;
//     this.draw=function(){
//         console.log("drawing function");
//     }
// }
// let rectangleobject = new Rectangle("abhi",6);
// console.log(rectangleobject);


// function ram( add, roll){
//     this.address= add;
//     this.roll= roll;
//     this.shyam= function(){
//         console.log("hello ram");
//     }
// }
// let sita= new ram("udki",365);
// console.log(sita);



// let rectangle ={
//     length:2,
//     breadth:4,
// };
// //for in loop
// for(let key in rectangle){
//     console.log(key,rectangle[key]);
// }

// // for of loop
// for(let key of Object.entries(rectangle)){
// //     console.log(key);
// // }
// // object cloning

// let src={
//     a:10,
//     b:20,
//     c:30,
// };
// let dest={};
// for (let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);
// // object cloning using object.assign
// let src1={
//     a:10,
//     b:20,
//     c:30,
// };
// let src2={value:200}
// let dest1=Object.assign({},src1,src2);
// console.log(dest1);
// src1.a++;
// console.log(dest1);
// // object cloning using spread operator
// let src3={
//     a:10,
//     b:20,
//     c:30,
// };
// let dest2={...src3};
// console.log(dest2);
// src3.a++;
// console.log(dest2);
// Math.random();

// let lastname= "jaya";
// console.log(typeof lastname);

// let firstname= new   String("jaya");
// console.log(typeof firstname);

// let date = new Date();
// console.log(date);


// let num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// num.push(10);
// num.unshift("a");
// num.splice(3,0,"a","b","c","d","e");
// console.log(num.includes("z"));
// console.log(num.indexOf(1,2))
// console.log(num);

// let courses =[
//     {no:1,naam:"abhi"},
//     {no:2,naam:"jaya"}
// ];
// console.log(courses);

// let course=courses.find(function(course){
//     return course.naam === "jaya"
// })
// console.log(course);


// let arr=[1,2,3,4,5]
// let arr2=[5,6,7,8,9];
// let arr3=arr.concat(arr2);
// let arr4=arr3.slice(2,3)

// console.log(arr3);
// console.log(arr4);

// let arra=[1,2,3,4,5]
// let arrb=[5,6,7,8,9];

// let arrc={...arra, ...arrb}
// console.log(arrc);


// let numbers ="this is my first message";
// let number=[10,11,1,2,13,15];
// let s= number.join("_");
// console.log(s);
// let d = numbers.split(" ");
// let e= d.join("_");
// console.log(e)
// console.log(d);

// let number = [40,30,10,20,50];
// number.sort();
// // 
// // console.log(br);
// console.log(number);
// number.reverse();
// console.log(number);


// let number =[1,2,-1,-2]
// let filter = number.filter(value=>value>=0);
// console.log(filter);


// let number1 = [40,30,10,20,50];
// let map=number1.map(value=>'student_no'+value);
// console.log(map);
let number =[1,2,-1,-2]
let filters = number.filter(value => value >= 0);

let item = filters.map(num=>{value:num});
console.log(item)
