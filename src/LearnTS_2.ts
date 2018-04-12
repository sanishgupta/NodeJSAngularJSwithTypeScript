console.log('***********************************************************');
console.log('********************Var/Let type **************************');

let a2; // by default any type.
a2 = 1;
a2 = true;
a2 = 'true';
a2 = '$';

//let c: number;
//let d: boolean;
//let e: string;
//let f: any;
//let g: number[] = [1, 2, 3, 4, 5];
//let h: any[] = [1, 's', true, '$$' , false];

const ColorRed1 = 0;
const ColorGreen1 = 1;
const ColorBlue1 = 2;

// Or Enum way as java to define it.
//enum Color { RED, GREEN, BLUE}
// OR
//enum Color1 { RED = 0, GREEN = 1, BLUE = 2};
//let bkgColor = Color1.GREEN; //value will be 1


console.log('***********************************************************');
console.log('********************Type assertions means specify the type of vaiable. **************************');

let mssg = 'abc'; // explicitly saying this as type of string
// OR
let mssg2;
mssg2  = 'abc';

let endsWithC = mssg.endsWith('c');
console.log(endsWithC);
// ORS
//let endsWithC1 = (<string> mssg2).endsWith('c'); // defining as string explicitly
//console.log(endsWithC1);
// OR
//let endsWithC2 = (mssg2 as string).endsWith('c'); // defining as string explicitly
//console.log(endsWithC2);

console.log('***********************************************************');
console.log('********************Function definitions OR Lambda expressions. **************************');

let val = function(mssg2) {
  console.log(mssg2);
}

// OR also said it as Lambda expressions

let val1 = (mssg2) => {
  console.log(mssg);
}

// OR also said it as Lambda expressions in java but in typescript called as error function.
let val2 = (mssg2) => console.log(mssg);

// OR also said it as Lambda expressions in java but in typescript called as error function.
let val3 = mssg2 => console.log(mssg);
let val4 = () => console.log();

console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4); 
console.log('***********************************************************');
console.log('********************inline annotations **************************');

let drawPoint1 = (x, y) =>{
  
};


let drawPoint2 =({
  x:1,
  y:2
 });


//This way is called annotation way in type script
let drawPoint3 = (point: {x : number , y: number}) =>{ };

// OR defining the same throug the interface.
interface Point {
  x : number, y:number;
}
let drawPoint4 = (point : Point) =>{
  };

// OR Better way to define them are like
interface Point {
  x : number, y:number
}
  let drawPoint5 = (point : Point) =>{
    //....
  };

  let getDistance = (pintA : Point, pointB : Point) => {
    //....
  } 

// OR by creating a class and combining them in one.

class Point {
  x: number;
  y: number;
  
  draw(){
    //...
    console.log('Calling # draw() method');
    console.log('X = ' + this.x + ' & Y = ' + this.y);
  }
  
  getDistance(anotherPoint : Point){
    //....
    console.log('Calling # getDistance() method')
  }
  
}


let point: Point;
point.draw;
point.getDistance;




