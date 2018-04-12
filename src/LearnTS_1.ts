/**
 * New typescript file
 */
function log(msg){
  console.log(msg);
}

log('Hello World!!!');

var msg = 'Welcome to the var world!!!';
log(msg);
 console.log('**********************************************');

//to way to define vairables.
var num = 1;  //scope will be function or wide range of block. 
let count = 5; // completely local scope like local variable in java

console.log('num #' + num);
console.log('count #' + count);

console.log('***********************************************************');
console.log('********************How Var works**************************');
function doSoemthing(){
  for(var i=0; i<5; i++)
    console.log(i);
  
 console.log(i + '*'); //outside the scope of function but still accessible
}
doSoemthing(); //Fn Calling

console.log('***********************************************************');
console.log('********************How Let works**************************');

function doSoemthing2(){
  for(let i=0; i<5; i++)
    console.log(i);
  
  //outside the scope of function so in case of let not accessible outside
  //so need to comment here to execute the program run successfully
  //console.log(i + '*'); 
}

doSoemthing2(); //Fn Calling

console.log('***********************************************************');
console.log('********************How forEach works**************************');

//let aa: any[] = [1, '2','@', '$', 'W'];

//for(let i in aa)
 // console.log(i);

function doTest1() {

//  forEach(local var aa : a);

}
console.log('***********************************************************');
console.log('********************Var/Let type **************************');

let a1; // by default any type.
a1 = 1;
a1 = true;
a1 = 'true';
a1 = '$';

//let p1: number;
//let t1: boolean;
//let t2: string;
//let t3: any;
//let t4: number[] = [1, 2, 3, 4, 5];
//let t5: any[] = [1, 's', true, '$$' , false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// Or Enum way as java to define it.
//enum Color { RED, GREEN, BLUE}
// OR
//enum Color1 { RED = 0, GREEN = 1, BLUE = 2};
//let bkgColor = Color1.GREEN; //value will be 1







 