// console.log('Hello Vismaad');

//primitive data types(string,number,boolean,null,undefined)these all are PASS BY VALUE.
//Non-primitive datatypes(object{},array[],string())are all PASS BY REFERENCE.

//PASS BY VALUE EXAMPLES
//((on changing the value inside the function, the variable outside the function is not affected))

// let news='new object';
// console.log(news);
// news += ' is created today';
// console.log(news);

// const a = 10;
// console.log(a)
// function square(x){
//     x++
//     return x*x
// }

// console.log(square(a))
// console.log(a)

// let b=2;
// console.log(b);
// function mul(x){
//     x++;
//     return x*x;
// }
// console.log(mul(b));
// console.log(b);

//PASS BY REFERENCE EXAMPLES
//((we pass the reference of the actual parameter. No copy is created in the memory.))

// const arr = [1,2,3];
// console.log(arr)
// function abc(arr1){
//     arr1[0] = 2;
//     return arr1
// }

// console.log(abc(arr))
// console.log(arr)

// let a=[1,2,3];
// console.log(a);
// function mul(x) {
//     x[0]= 21;
//     x[1]=22;
//     x[2]=23;
//     return x;
// }
// console.log(mul(a));
// console.log(a);

// let student = {
//     name:'vismaad',
//     age:22,
//     gender: 'male',

// };
// console.log(student);
// function change(obj){
//     obj.age -= 2;
//     obj.name='ISHITA';
//     obj.gender = 'female';
// }
// change(student)
// console.log(student);

// let person = {
//     name: 'John',
//     age: 25,
//   };
//   console.log(person);

//   function increaseAge(obj) {
//     obj.age += 1;
//   }

//   increaseAge(person);

//   console.log(person);

// var myArray = [ 'vismaad', 'singh' ];
// myArray[1] = 'Topics';
// console.log(myArray)

// var myArray1 = [ 'Scaler', 'Topics' ];
// var myArray2 = myArray1;
// console.log(myArray1 === myArray2);

//JS LOOPS(for,while,do-while,for-in)_______________________________________

//JS FOR LOOP
// let x=1;
// for(i=0;i<=5;i++)
// {
//     console.log(x);
//     x++
// }

// JS WHILE LOOP
// let x=1,y=5;
// while(x<=5){
// console.log(x);
//     x+=1;
// }
// let sum=0;
// let number=5;
// // while(number>=5){
// //     sum += number;
// //     number++;
// // }
// // console.log(sum);

// console.log(sum);

//DO WHILE LOOP
// (same as while loop but The only difference is that in do…while loop,
//  the body of loop is executed at least once.)

// let i = 1;
// const n = 5;
// do {
//     console.log(i);
//     i++;
// } while(i <= n);


// let x=6;
// let sum=0;
// do
// {
//     sum+=x
//     console.log(sum);
//     x++;
// }while(sum<=50)

//for in loop
// const person = {fname:"Vismaad", lname:"Singh", age:22}; 
// let txt = "";
// for (let x in person) {
//   txt += person[x] + " ";
// }
// document.getElementById("demo").innerHTML = txt;



const student = {
  name: 'Monica',
  class: 7,
  age: 12
}
for ( let key in student ) {

  console.log(`${key} => ${student[key]}`);
}