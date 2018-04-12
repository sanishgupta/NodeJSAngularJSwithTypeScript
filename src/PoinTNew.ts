console.log('***********************************************************');
console.log('******Export a Class  type or Export a module which is called a Class also **************************');

// OR by creating a class and combining them in one.

export class PoinTNew {
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

getDistance(anotherPoinT: PoinTNew) {
  //....
  console.log('Calling # getDistance() method');
}

}


//let PoinTNew: PoinTNew;
//
//let PoinTNew: PoinTNew = new PoinTNew();
//let PoinTNew: PoinTNew = new PoinTNew(1, 2);
//PoinTNew.x = 1;
//PoinTNew.y = 2;
//
//PoinTNew.draw();
// OR
//let PoinTNew1 = new PoinTNew();
//let PoinTNew1 = new PoinTNew(5, 6);
//PoinTNew1.x = 5;
//PoinTNew1.y = 6;
//
//PoinTNew1.draw();
//PoinTNew.getDistance();
//
//let PoinTNew2: PoinTNew = new PoinTNew();
//PoinTNew2.x = 1;
//PoinTNew2.y = 2;
//PoinTNew2.draw();

