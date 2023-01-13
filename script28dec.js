// console.log('Hello');

//localStorage________________________

localStorage.setItem("Name", "Vismaad");
localStorage.setItem("Name2", "Harry");

window.localStorage;
//will show(Storage {Name2: 'Harry', Name: 'Vismaad', length: 2})

typeof window.localStorage;
//will show('object')

window.localStorage.Name;
//will show('Vismaad')

window.localStorage.Name2;
//will show('Harry')

let name = localStorage.getItem("Name");
console.log(name);
//will show(Vismaad)

let namee = localStorage.getItem("Name2");
console.log(namee);
//will show(Harry)

let naame = localStorage.getItem("Name212121"); //this item doesnot exist
console.log(naame);
//will show(null)

// localStorage.clear();           //to clear localStorage

localStorage.removeItem("Name");
window.localStorage; //9will only showStorage {Name2: 'Harry', length: 1}
//to remove particular key

// to count the number of clicks______________________________________________________

// function clickCounter() {
//     if (localStorage.clickcount) {
//         localStorage.clickcount = Number(localStorage.clickcount)+1;
//     } else {
//         localStorage.clickcount = 1;
//     }
//     document.getElementById("demo").innerHTML = localStorage.clickcount;
// }
// clickCounter();

// function CC(){
//     if(typeof(Storage)!== "undefined")
//     {
//         if(localStorage.clickcount){
//             localStorage.clickcount=Number(localStorage.clickcount) +1;
//         }
//         else{
//             localStorage.clickcount=1;
//         }
//         document.getElementById("result").innerHTML=localStorage.clickcount + 'Times';
//     }
//     else{
//             document.getElementById('result').innerHTML='Browser Not Supported';
//     }
// }
//     function clearCounting(){
//         window.localStorage.clear();
//     }

//Session storage_______________________________________________________________________

// sessionStorage.setItem("Name2", "Harry");
// sessionStorage.setItem("Name", "Vismaad");
// window.sessionStorage;
// //will show(Storage {Name2: 'Harry', Name: 'Vismaad', length: 2})

// typeof window.sessionStorage;
// //will show('object')

// window.sessionStorage.Name;
// //will show('Vismaad')

// window.sessionStorage.Name2;
// //will show('Harry')

// // sessionStorage.removeItem('Name');
// // window.sessionStorage.clear();



// sessionStorage.setItem('username','Vismaad_singh');
// sessionStorage.setItem('password','a@123');

// console.log(sessionStorage.getItem('username'));



                    //cookies_______________________________________________________________________________________

// console.log(document.cookie);

// document.cookie="Please accept this cookie";
// document.cookie="name=vis256543540";
// document.cookie="name2=vis25651243540";
// document.cookie="name3=vis21456543540";


let key=prompt('enter the Key');
let value=prompt('enter the value');
document.cookie=`${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
                        // document.cookie=`${key}=${value}`
console.log(document.cookie);

                        // decodeURIComponent(vismaad%3B%3B%3B%3B);


