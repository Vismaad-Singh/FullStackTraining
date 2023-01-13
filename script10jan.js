// function BankAccount(customerName, balance=0){
//     this.customerName =customerName;                        //line 2,3,4 are called properties
//     this.accountNumber=Date.now();
//     this.balance=balance;

//     this.deposit= function(amount){
//         this.balance += amount;
//     };
//     this.withdraw =(amount) =>{
//         this.balance -= amount;
//     }
// }
// const rakeshAccount= new BankAccount("Rakesh", 2000);
// rakeshAccount.deposit(1000)
// rakeshAccount.withdraw(1500)

// console.log(rakeshAccount);



// encapsulation_______________________________

// let base_sal=15000;
// let overtime=20;
// let rate=100;

// function get_wage(base_sal,overtime,rate){
//     return base_sal + (overtime*rate);
// }
// let employee = {
//     base_sal: 15000,
//     overtime: 20,
//     rate: 100,
//     get_wage: function(){
//         return this.base_sal + (this.get_wage*this.overtime);
//     }
// };
// employee.get_wage();




// class employee{

//     setEmpDetails(name,id,add,contact){
//        this.name=name;
//        this.id=id;
//        this.add=add;
//        this.contact=contact;

//     }
//     getEmpName(){
//         return this.name;
//     }
//     getEmpId(){
//         return this.id;
//     }
//     getEmpAdd(){
//         return this.add;
//     }
//     getEmpContact(){
//         return this.contact;
//     }
// }
// let emp1 = new employee();
// emp1.setEmpDetails('vismaad',2,'chd',9475052014);

// console.log(emp1);




