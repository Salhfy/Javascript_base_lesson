function test(x,y){
  let z =x+y;
  return 
}

console.log(test(3,5)+4);

//Q1
let nickname = 'ごっしー';
let age = '28';
let longText = '私のニックネームは'+nickname+'です。年齢は'+age+'です。';
console.log(longText);

//Q2
let language =[];

language[0] = 'Javascript';
language[1] = 'PHP';
language[2] = 'Ruby';
language[3] = 'Python';
language[4] = 'Go';

let text =(`私の好きな言語は${language[0]}です。
次は${language[3]}を勉強してみたいです。`);
console.log(text);

//Q3
let user = {
    name: 'John',
    age: 26,
    bloodType: 'A',
    favorite: 'card',
  };
console.log(user.age);

//Q4
let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    },
  ];



let favorites = [];
favorites[0] = 'Card Game','Tinder','Football';
favorites[1] = 'Basket Ball','The Legend of Zelda','Smash Bros.';
favorites[2] ='Programming';

console.log(playerList[1].favorites[1]);

//Q5
const arr = [26,33,22]
let sum = 0;
for(let i = 0;i<arr.length; i++){
  sum += arr[i];
}

console.log(sum / arr.length);

//Q6
const sayWorld = function(){
  console.log('World');
}
sayWorld();

//Q7
user.birthday = '2000-09-27'
user.sayHello = function(){
  console.log('Hello!');
}

//Q8
let calc ={
  add:function (x,y) {
  console.log(x+y);
},
  subtract:function (x,y){
  console.log(x-y);
},
  multiply:function (x,y){
  console.log(x*y)
},
  divide:function (x,y){
  console.log(x/y);
}
};

calc.add(3,4);
calc.subtract(20,10);
calc.multiply(7,7);
calc.divide(10,2);

//Q9
  function remainder(x,y){
    let result = x%y;
    return result;
  };
  let num1=5
  let num2=3
  console.log( num1 +'を'+ num2 + 'で割った余りは'+ remainder(num1,num2) + 'です。');

  //Q10 X＝１の参照範囲が関数内のローカルスコープであるから。

function trainning(x,y){
  let result = x*y;
  return result;
};
let num3=7
let num4=9
console.log( num3 + 'と' + num4 + 'をかけた積は'+ trainning(7,9) + 'です。');


function trainning2(x,y){
  let result = x + y;
  return result;
};
let num5 = remainder(5,3)
let num6 = trainning(7,9)
console.log( num5 + 'と' + num6 + 'を足した和は'+ trainning2(num5,num6) + 'です。');

//応用
//Q1
const num = Math.floor(Math.random() * 9) + 0;
console.log(num);
//Q2
setTimeout(()=>{
  console.log('Hello World!');
},3000);
//Q3
if(num>0){
  console.log('num is greater than 0');
 }else if(num<0){
  console.log('num is less than 0');
 }else{
  console.log('num is 0');
 }

//Q4*****************************************************
let numbers = [];
for(let i=0;i<=99;i++){
  numbers.push(i);
}
console.log(numbers);

//Q5****************************************************

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  if (typeof mixed[i] == 'number' && mixed[i]%2===0){
    console.log('even');
  }else if(typeof mixed[i] == 'number' && mixed[i]%2===1){
    console.log('odd');
  }else{
    console.log('not number');
  }
};

//ex
