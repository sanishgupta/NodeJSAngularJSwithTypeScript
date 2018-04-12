console.log('***********************************************************');
console.log('********************how to import a Class  type **************************');

import {PoinTNew} from './PoinTNew'

let point = new PoinTNew();
point.x = 1;
point.y = 3;
point.draw();

let pointA = new PoinTNew(1);
pointA.y = 3;
pointA.draw();

let pointB = new PoinTNew(5,6);
pointB.draw();
