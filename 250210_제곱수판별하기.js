//어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  var answer = 0;

  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;

}

// Number.isInteger : 정수판별
// Math.sqrt(144) : 12 / 제곱근 계산하는 함수
// console.log(144 ** 0.5) : 12 / 거듭제곱 연산자 ** 간단해서 최신코드에서 많이 사용됨
// Math.sqrt(x) === Math.pow(x,0.5) :
// Math.pow(x,n) : 거듭제곱 계산하는 함수
// Math.pow(12,2) : 144