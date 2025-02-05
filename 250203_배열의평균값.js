//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    
  let sum = 0;
  for ( let num of numbers ){
    
    sum += num;
  }
  return sum / numbers.length;
}


function solution(numbers) {

  let sum = 0;
  for ( let num = 0; num < numbers.length; num++) {

    sum += numbers[num];
  }
  return sum / numbers.length;
}