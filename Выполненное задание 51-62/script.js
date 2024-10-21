"use strict";
// #51.1
// let test = Boolean(3);
// alert(test);
// Answer: true

// #51.2
// let test = Boolean(0);
// alert(test);
// Answer: false

// #51.3
// let test = Boolean(-1);
// alert(test);
// Answer: true

// #51.4
// let test = Boolean(-0);
// alert(test);
// Answer: false

// #51.5
// let test = Boolean(+0);
// alert(test);
// Answer: false
 
// #51.6
// let test = Boolean('abc');
// alert(test);
// Answer: true

// #51.7
// let test = Boolean('');
// alert(test);
// Answer: false

// #51.8
// let test = Boolean('0');
// alert(test);
// Answer: true

// #51.9
// let test = Boolean(true);
// alert(test);
// Answer: true

// #51.10
// let test = Boolean(false);
// alert(test);
// Answer: false

// #51.11
// let test = Boolean('true');
// alert(test);
// Answer: true

// #51.12
// let test = Boolean('false');
// alert(test);
// Answer: true

// #51.13
// let test = Boolean(null);
// alert(test);
// Answer: false

// #51.14
// let test = Boolean('null');
// alert(test);
// Answer: true

// #51.15
// let test = Boolean(undefined);
// alert(test);
// Answer: false

// #51.16
// let test = Boolean('undefined');
// alert(test);
// Answer: true

// #51.17
// let test = Boolean(NaN);
// alert(test);
// Answer: false

// #51.18
// let test = Boolean('NaN');
// alert(test);
// Answer: true

// #51.19
// let test = Boolean(3 * 'abc');
// alert(test);
// Answer: true

// #51.20
// let test = Boolean(Infinity);
// alert(test);
// Answer: true

// #51.21
// let test = Boolean(1 / 0);
// alert(test);
// Answer: true

//#52.1
let str521 = 'abcde';
alert(str521[0])
alert(str521[2])
alert(str521[4])

//#52.2
let str522 = 'abcde';
let reversedStr = '';

for (let i = str522.length - 1; i >= 0; i--) {
    reversedStr += str522[i];
}
alert(reversedStr)

// #52.3
let str523 = 'abcde';
let num523 = 3;
alert(str523[num523]);

//#54.1
let str541 = 'abcde';
alert(str541[str541.length - 1]);

//#54.2
let str542 = 'abcde';
alert(str542[str542.length - 2]);

//#54.3
let str543 = 'abcde';
alert(str543[str543.length - 3]);

//#55.1
let test551 = '12345';
alert(Number(test551[0]) + Number(test551[1]) + Number(test551[2]) + Number(test551[3]) + Number(test551[4]));


//#56.1
let test561 = '12345';
alert(Number(test561[0]) + Number(test561[1]) + Number(test561[2]) + Number(test561[3]) + Number(test561[4]));


//#56.2
let test562 = '12345';
alert(Number(test562[0]) * Number(test562[1]) * Number(test562[2]) * Number(test562[3]) * Number(test562[4]));

//#56.3
let test563 = '12345';
let reversedStr1 = '';

for (let i = test563.length - 1; i >= 0; i--) {
    reversedStr1 += test563[i];
}
alert(reversedStr1)

// #57.1
// let num = 1;
// num = num + 1;
// num = num + 1;
// alert(num);
// Answer: 3

// #57.2
// let num = 1;
// num = num + 2;
// num = num + 3;
// alert(num);
// Answer: 6

// #58
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// #59
// let num = 10;
// num++;
// num++;
// num--;
// alert(num);

// #60.1
// let num = 3;
// alert(++num);
// Answer: 4

// #60.2
// let num = 3;
// alert(num++);
// Answer: 3

// #60.3
// let num = 3;
// alert(--num);
// Answer: 2

// #60.4
// let num = 3;
// alert(num--);
// Answer: 3

// #60.5
// let num1 = 3;
// let num2 = ++num1;
// alert(num1);
// alert(num2);
// Answer: 3, 4

// #60.6
// let num1 = 3;
// let num2 = num1++;
// alert(num1);
// alert(num2);
// Answer: 3, 3

// #60.7
// let num1 = 3;
// let num2 = --num1;
// alert(num1);
// alert(num2);
// Answer: 3, 2

// #60.8
// let num1 = 3;
// let num2 = num1--;
// alert(num1);
// alert(num2);
// Answer: 3, 3

// #60.9
// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++);
// alert(--num2);
// Answer: 3, 3

//#61.1
alert(0.1 * 0.2);

//#61.2
alert(0.3 - 0.1);

//#62
let name = prompt('Ваше имя?');
let age = prompt('Ваш возраст?');
alert('Ваше имя и возраст: ' + name + age);
