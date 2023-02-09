// function Object(name, status) {
//     return {
//        name: name,
//        status: status                   //before ES6
//     };
// }
// let TV=new Object("TV","ON");
// console.log(TV);

// function person(id,name,age){
//     return{
//         id,
//         name,                        //AFTER ES6
//         age
//     }

// }
// let vismaad = person(1,"Vismaad",22);
// console.log(vismaad);


// let lastName= "Singh";
// function person(id,name,age){
//     return{
//         id,
//         name,
//         lastName,
//         age
//     }

// }
// let vismaad = person(1,"Vismaad",22);
// console.log(vismaad);



// function person(id, name,lastName, age) {
 
//     return { 
//         id,
//                 name,
//                 lastName,
//                 age,
//         active:true
 
//     }
// }
// let vismaad = person(1,"Vismaad","Singh",22);
// console.log(vismaad);


// let name = 'Computer',
//     status = 'On';

// let machine = {
//    name,
//    status
// };
// console.log(machine);


// let greeting = {
//     fullName: "vismaad singh",
//     greet: (message,name) => {
//         console.log(message + " " + name + "!!");
//     }
// };
// console.log(greeting.fullName);

// greeting.greet("Greeting", greeting.fullName);


//Using add and get methods_______________________________________

// var products = {
//     items: [],

//     add(item){
//         this.items.push(item);
//     },
//     get(index){
//         return this.items[index];
//     }

// }
// function item(code, name){
//     return{
//         code,
//         name
//     }
// }
// products.add(item(1,"BAT"));
// products.add(item(2,"Computer table"));
// products.add(item(3,"Bottle"));

// console.log(products.get(2));


// let company = {
//     name: [],

//     add(item){
//         this.name.push(item);
//     },
//     get(index){
//         return this.name[index];
//     },
// };
// function CName(companyName,companyStatus,companyProfits){
//     return{
//         companyName,
//         companyStatus,
//         companyProfits
//     }
// }

// company.add(CName("Infostride","Active","Huge"));
// console.log(company.get(0));






// let company = { 
//     name:[],
//     add(item){
//          this.name.push(item);
//     },
//     get(index){
//         return this.name[index];
//     },
// }
// const Company = (Name,phone,address) => {
//     return{
//         Name,
//         phone,
//         address
//     }
// }
// function new1(phone,city){
//     return{
//         city,
// phone
//     }

// }
// company.add(Company("infostride","9876543210","E40 sector 72,Mohali"));
// company.add(new1("kcghhde","mohali6996"))
// console.log(company.name);


// function dog(name,color,age){
// return{
//      name : name,
//      age: age,
//      color: color
// }
// } 
// const dog1= new dog("tommy",["black"],2);
// console.log(dog1);
    
    


// function GenralCar(givenName,givenSpeed){
//     this.name = givenName;
//     this.topspeed = givenSpeed;
//     this.run = function(){
//         return (`${this.name} is running`);
//     }
// }
// const car1 = new  GenralCar("skoda",195);

// console.log(car1.run());


const newName = (name,age) =>
{
    return {
        name :name,
        age:age
    }
}
newName();
const name1 =  newName("Vismaad",17);
console.log(name1)