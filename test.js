const hour = 2;
const minute = 30;

const sentence = 
'총 경과시간은 ${hour * 60 + minute}분입니다.';

const book ={
  name : '커피를 마시는 새',
  page : 500,
  soldout : false,
  sort : ['판타지','SF','스릴러']

}

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++){
    console.log(`${i} * ${j} = ${i * j}`);

  }
}

let a = 1;
let b = 2;
{
  a = 3;
  let b = 4;

  console.log(a,b);
}
console.log(a,b)


const score = 85;
let point 

if ( score >= 90) {
  point = 'A'
} else if ( score >= 80 ) {
  point = 'B'
} else if ( score >= 70) {
  point = 'C'
} else if ( score >= 60) {
  point = 'D'
} else  {
  point = 'F'
}
console.log(point);

const food = 'pasta';

switch (food) {
  case 'pasta' : case 'pazza' : case 'risotto':
    console.log('Italian'); break;

  case 'burger' :
    console.log('American'); break;
    default :
    console.log('Unknown')

}

for ( let i = 1; i <= 20; i++){
  if ( i % 2 ===0){
    console.log(i)
  }

}

const numbers = [1,2,3,4,5];
let sum = 0;

for (let num of numbers) {
  sum += num;
}
console.log(sum);

let user = { 
  id: 1,
   name: 'Akuce', 
   job: 'Developer'
  };

for ( let info in user) {
  if (info == 'name') continue;

  console.log(` ${info} : ${user[info]}`);
}

let count = 5;
 while (count) {
  console.log(count-- * 10);
 }