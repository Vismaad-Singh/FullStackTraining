

            // Conditional(Ternary) operator___________________________________________________________________________________________________________

// let age=18;
// console.log((age>=18)?'you can vote':'you cannot vote');



// let age=19;
// let result='';
// let canDrive = result>=18?"Yes he/she can drive":"No he/she can't drive";                        //not solved___________________________
// console.log(canDrive);



// const age = 10;
// const beverage = age >= 21 ? "Coctail" : "Juice";
// console.log(beverage);



//
// let age = 17;
// if(age>=18){
//     console.log('You can Drive')
// }else{
//     console.log('you cannot drive')
// }


// let x = 7;
// let y = 7;
// let z = 8;
// console.log((x===y)?"Yes x===y":console.log((y===z)?"Yes y===z":console.log("Not Equal")));



// function PorF() {
// 	let PassingMarks = 40
// 	let result = (PassingMarks > 39)?
// 		"Pass":"Fail";

// 	console.log(result);
// 	}
// 	PorF();



// function Age() {

//         let person = 40
//         let result = (person > 18)?
//             "Adult":"Teen";

//         console.log(result);
//         }
//         Age();




// function fResult() {

//     let a = 9;
//     let b=8;
//     let c=9;
//     let result = (a===b) ? "Yes a is strictly equal to b" :
//              (b===c) ? "Yes b is strictly equal to c" :
//              (c===a) ? "Yes c is strictly equal to a" : "Not Defined" ;

//     console.log(result);
//     }
//     fResult();




            //for loop__________________________________________________________________________________________________________________________________


// for (i=1; i<=5; i++)
// {  
//  console.log(i + " ")  
// }


// for (i=1; i<5; i++)
// {  
//  console.log(i + " ")  
// }


// for (i=1; i=5; i++)
// {  
//  console.log(i + " ")  
// }


// for (i=1; i>5; i++)
// {                                        //to print value of i(will not work in this case)
//  console.log(i + " ")  
// }

// const n = 5;
// for(let i=1;i<=10;i++)
// {                                                                    //to print table
//     console.log(n*i + " ")
// }


// let sum = 0;
// let n = 10
//                                                                 //sum of n natural numbers
// for (let i = 1; i <= n; i++) {
//     sum += i;  // sum = sum + i
// }

// console.log('sum:', sum);





                    //forEach loop _________________________________________________________________________________________________________________


// let numbers=[10,20,30,40,50,60,70,80,90];
// numbers.forEach((no,index,arr) => {
//     console.log( 'a['+ index+']='  + no);
// });


// let numbers=[10,20,30,40];
// let sum=0;
// numbers.forEach(no =>
//     {                                                   //sum using forEach________________________________________
// sum += no;
//     });
//     console.log(sum);



// let number=[1,2,3,4,5,6,7];
// let mul=1;
//                                                              //mul in forEach(1×2×3×4×5×6×7)__________________________________________
// number.forEach(no =>
//     {
//         mul *= no;
//     });
//     console.log(mul);



// let number=[1,2,3,4,5,6,7];                     //mul each value by 5______________
// let mul=5;
// number.forEach(function(value,index,array){
//     number[index] *= mul;
// })
// console.log(number);                            //why to write it after the code ends________



                    //MAP Method_________________________________________________________________


// let number=[10,12,15]
                                                        //add number_____________                                                      
// let a = number.map(function(value,index,array){
//     return value +5
// })
// console.log(a)



// let number=[10,12,15]
                                                        //mul index and value
// let a = number.map(function(value,index,array){
//     return value*index
// })
// console.log(a)


                            //reduce method_____________________________________________________

                            
// let number=[10,14,16,84]
// let a = number.reduce(function(h1,h2){
//     return h1+ h2                                        //addition
    
// })
// console.log(a)


// let number=[5,6,8,9]
// let newarr= number.reduce(function(h1,h2)
// {                                                            //multiplication
//     return h1 * h2
// })
// console.log(newarr)



// var emp=["Sonoo","Vimal","Ratan"];  
// var new1=["Sono11111o","Vimal1111","Ratan11111"];  
// for (i=0;i<emp.length;i++){  
// document.write(emp[i] + "<br/>");  
// }  