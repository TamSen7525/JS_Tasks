"use strict";
/*
#43.1
let a = '5' + '2';
alert(a);
Answer: 52

#43.2
let a = '5' + 2;
alert(a);
Answer: 52

#43.3
let a = 5 + '2';
alert(a);
Answer: 52

#43.4
let a = 5 + 2;
alert(a);
Answer: 7

#43.5
let a = '5' * '2';
alert(a);
Answer: 10

#43.6
let a = '5' - '2';
alert(a);
Answer: 3

#43.7
let a = '5' / '2';
alert(a);
Answer: 2.5

#43.8
let a = '5' % '2';
alert(a);
Answer: 1

#43.9
let a = '5s' * '2';
alert(a);
Answer: NaN

#43.10
let a = '5s' + '2';
alert(a);
Answer: 5s2

#43.11
let a = (-'5') + (-'2');
alert(a);
Answer: -7

#43.12
let a = '5' * 1 + '2' * 1;
alert(a);
Answer: 7

#43.13
let a = '5' * '1' + '2' * '1';
alert(a);
Answer: 7

#43.14
let a = '' + 3 + 1;
alert(a);
Answer:  31
*/
//#44.1
let a = '10';
let b = '20';
alert(Number(a) + Number(b));
/*
#44.2
alert( Number('2') + Number('3') );
Answer: 5

#44.3
alert( 2 + Number('3') );
Answer: 5

#44.4
alert( '2' + Number('3') );
Answer: 23

#45
let a = '2';
let b = '3';
alert(+a + +b); выведет 5
*/
//#47.1
let num4711 = parseFloat('5px'), num4712 = parseFloat('6px');
alert(num4711+num4712);

//#47.2
let num4721 = parseFloat('5.5px'), num4722 = parseFloat('6.25px');
alert(num4721+num4722);

//#47.3
let num4731 = parseFloat('5.5px'), num4732 = parseFloat('6.25px');
alert(num4731+num4732+'px');

//#48
let num481 = 1, num482 = 2;
alert(String(num481)+String(num482))

//#49.1
let num491 = 12345;
alert(String(num491).length);

//#49.2
let num4921 = 12345;
let num4922 = 135;
alert(String(num4921).length+String(num4922).length);

// #50.1
// alert(true + 3);
// Answer: 4

// #50.2
// alert(true + true);
// Answer: 2

// #50.3
// alert(true - true);
// Answer: 0

// #50.4
// alert(true + false);
// Answer: 1

// #50.5
// alert('1' + true);
// Answer: 1true

// #50.6
// alert( String(true) + 1 );
// Answer: true1

// #50.7
// alert( String(true) + Number(true) );
// Answer:true1

