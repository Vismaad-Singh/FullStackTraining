// alert("Hi Vismaad!");


// let arr = [{id:1, name:"Vismaad"}, {id:2, name:"Manik"}];
// // let result = arr.find((item)=>item.id > 1)
// let result = arr.findIndex((item)=> item.id <2)
// console.log(result);

// class fruits{
    
//     name1= "Vismaad"                     //class
//      name2= "Vikas"
// constructor(){
//     console.log("New Constructor is name as",this.name1);
//     console.log("New Constructor is name as",this.name2);

// }
// getFruits= ()=> "Function"

// }
// let f1 = new fruits;
// console.log(f1.getFruits());


//inheritance
// class Category{
//     dryFruit(){
//         return "Almond is dry fruit"
//     }
//     otherFruit(){
//         return "Apple is other fruit"
//     }
// }
// class Fruits extends Category{
//     constructor(){
//         super()
//        console.log("Constructor");
//     }
//     getFruits = () => "Apple";
// }
// let f1 = new Fruits;
// let c1=new Category; 
// console.log(f1.otherFruit());
// // console.log(c1.otherFruit());


//Lexical Scope for this
// let data= {
// list: "Friend",
// names: ["Vismaad","Manik","Ajit"],
// getFriends: function() {
//     this.names.map((item)=>{
//         console.log(this.list,item);
//     })
//     // console.log(this.names);
// }
// }
// data.getFriends();


//Rest operator
// function fruits(a,...b){
//     console.log("Fruit: ",b);
// }
// function test(){
//     return " These all are fruits";
// }
// fruits("Apple","Mango","Papaya","orange",test());


//Promises
// let a=undefined;

// let promiseData = new Promise((resolved,reject) => {

//     setTimeout(() => {
//         a="hello Vismaad";
//         resolved("Done");
//     }, 3000);
// })
// promiseData.then(()=>{
//     console.log(a);

// })


// let a=undefined;

// let promiseData= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         a="HOW ARE YOU TODAY!!"
//         resolve()
//     },2000);
// })
// promiseData.then(()=>{
//     console.log(a);
// })



// //Destructuring array
// let fruits= ["Apple","mango","kiwi","orange"];
// let [fruit1,...fruitx]=fruits;
// console.log(fruitx)


// //Destructuring array
// let userName = {name:"Vismaad" ,lName:"Singh", id:22, add:"CHD"}
// let {name,...lName}=userName
// console.log(lName)

//merge 2 arrays
// let fruits= ["Apple","mango","kiwi","orange"];
// let otherFruits= ["cherry","banana","guaua"];
// let allFruits = console.log(...fruits,...otherFruits);

// let otherFruits= ["cherry","banana","guaua"];
// let fruits= ["Apple","mango",...otherFruits,"kiwi","orange"];
// let allFruits = console.log(fruits);


//Exponentiation or exponential operator(**)
