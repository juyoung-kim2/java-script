// 정수 num1 과 num2 가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retur하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
    
  if (num1 === num2) {
      return 1
  } else if (num1 !== num2){
      return -1
  }
} 


// 3항연산자 참고 풀이
function solution(num1, num2){
  var answer = num1 === num2 ? 1 : -1;
  return answer;
}