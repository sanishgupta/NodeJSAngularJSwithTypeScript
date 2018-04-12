console.log('***********************************************************');
console.log('********************Class  type **************************');

// OR by creating a class and combining them in one.

class PointNew {
  x: number;
  y: number;

  //  constructor() {
  //    this.x = 0;
  //    this.y = 0;
  // }

//in type script we can have only one constructor so to have many we can use the option parameter term.
//Normal constructure
//  constructor(x: number, y: number){
//    this.x = x;
//    this.y = y;
//  }
//constructor with optional
constructor(x?: number, y?: number) {
  this.x = x;
  this.y = y;
};

draw() {
  // ...
  console.log('Calling # draw() method');
  console.log('X = ' + this.x + ' & Y = ' + this.y);
};

getDistance(anotherPoint: PointNew) {
  //....
  console.log('Calling # getDistance() method');
}

}


//let pointNew: PointNew;

//let pointNew: PointNew = new PointNew();
let pointNew: PointNew = new PointNew(1, 2);
//pointNew.x = 1;
//pointNew.y = 2;

pointNew.draw();
// OR
//let pointNew1 = new PointNew();
let pointNew1 = new PointNew(5, 6);
//pointNew1.x = 5;
//pointNew1.y = 6;

pointNew1.draw();
//pointNew.getDistance();

let pointNew2: PointNew = new PointNew();
pointNew2.x = 1;
pointNew2.y = 2;
pointNew2.draw();


console.log('***********************************************************');
console.log('********************Acccess modifiers Public provate protected by default all are public  type **************************');
