console.log('Hello Vismaad');

//``` 1.TYPE CONVERSION OR EXPLICIT CONVERSION```


// .....to string conversion.........
// *String()
// *toString()
//*toExponential()    //converts numbers into string exponential symbol
//*toFixed()          //mainly to specify number of digits to right of decimal
// *toPrecision()     //number is converted to string to format to fixed length




                                    //the string() method to convert anything into a string
String(1);

String(123451 +'xscvhj');

String(5*4);

String(null);

String(NaN);                //toString() is same as String()

String(undefined);

//some more examples of toString()

let num1=2;
num1.toString();

let PI=3.14;
PI.toString();

// Note: js engine will show type error if we try to pass undefined and null

let a1=1.2456;
a1.toExponential();

let a2=123.8541;
a2.toExponential();

let m1=1.234;
m1.toFixed(2);      //prints 1.23

let m2=11.46612;
m2.toFixed(1);

let p1=23.567;
p1.toPrecision(3);

let p2=741.456;
p2.toPrecision();


// ...........to number conversion...........
// *Number=()
// *parseInt(string,radix)     //The radix is used to denote numbers to the numeral system and is optional
// *parseFloat()



//If we pass the invalid string and undefined value then the result always printed as NaN.
Number('dsygsuhjn');        //output NaN

Number(undefined)           //output NaN

Number('123')               // 123

Number(true)                // 1

Number(null)                // 0

parseInt('123@dguddj');         // 123

parseInt('@dguddj14230');       //NaN

parseInt('1@dguddj14230');       // 1

parseInt('142.30');       // 142


parseFloat('123.842@sdgvguxdbg')        //123.842

parseFloat('dnh142.30');       // NaN



// ..............to boolean conversion.........
// Boolean


Boolean(1);         //true

Boolean(2);         //true

Boolean(0.2);       //true

Boolean(0);         //false

Boolean(null);      //false

Boolean('');        //false

Boolean(' ');       //true
//also undefined and nan the answer will be false



// ```TYPE COERSION OR IMPLICIT COERSION```_______________
// ((((((((.....coersion perform automatically or implicitly by JS engine))))))))
// *to string coersion
//* to number coersion
//* to boolean coersion






// alert('jxvhjx')         //jxvhjx
// alert(true)             // returns 'true'(string) in popup
// alert(null)             //returns 'null'


// *to string coersion
// console.log(1+'2');

// console.log(1+'2'+ true);

// console.log(undefined+'2');

// console.log(null+'2');

// console.log(NaN+'2');



//to number coersion                    //-,*,/,% performed with the string will convert into number implicitly
//NOTE::---- In number coercion, the plus(+) operator is not used
// console.log('20'-12);

// console.log('20'*2);                //40

// console.log('20'/2);                //10

// console.log('20'%2);                //0

// console.log(20- 'hello');           //NaN

// console.log(20- true);           //19

// console.log('20'+ true);           //20true

// console.log('20'* false);           //0



// boolean coersion
// console.log('true' - 1);               //NaN

// console.log(true - '1');               //0

// console.log(true - null);               //1

// console.log(true - undefined);               //NaN

// console.log(true - '');               //1

// console.log(true - ' ');               //1

// console.log(true - NaN);               //NaN

// console.log(true - 'true');               //NaN

// console.log(true * '5');               //5






//primitive DATATYPES  (primitives are immutable i.e. there is no way to change a primitive value once it gets created)

// let name='vismaad singh';
// name[5] = 'd';
// console.log(name);                  // returns vismaad singh (immutable)

// let jan=31;
// jan[0]=20;
// console.log(jan[0]);                   //returns undefined bcz immutable


// let jan=31;
// jan[10]=20;
// console.log(jan);                   //returns 31 bcz immutable

// NOTE:-- Primitive  values cannot be changed but their variable that it holds may be reassigned 
// ex:-
// let newstring="foundation"
// console.log(newstring);

// newstring += ' course';
// console.log(newstring);              //here we reassigned the values of variable that it holds
    




