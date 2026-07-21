//정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
  const arr = Array.from(String(n), Number);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// reduce 사용하기
function solution2(n) {
  return Array.from(String(n), Number).reduce((acc, cur) => acc + cur, 0);
}
