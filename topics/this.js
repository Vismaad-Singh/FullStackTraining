// console.log(this);              //it refers to window object

// function sum(){
//     let a= 2+2;
//     console.log('Sum of 2 numbers is ' + a);
//     console.log(this);                       //in a regular fn this refers to window object
// }
// sum();


let employee= {
    fname: 'vismaad',
    lname: 'singh',
    sal: function() {
        var add= 15000+ 4000;
        console.log('Salary: '+ add);
        console.log(this);
        // console.log(this.sal);
        
    }                                       //in a method, this refers to the owner objects
}
employee.sal();