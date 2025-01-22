//정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.


// trunc : 소수점 이하는 버린다
// floor : 항상 값을 작은 정수로 내리는 함수
Math.floor(-5.7) // -6
Math.floor(5.7) // 5

const solution = (num1, num2) => Math.trunc((num1 / num2) *1000 )