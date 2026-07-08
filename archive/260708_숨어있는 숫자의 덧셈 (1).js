//문자열 my_string이 매개변수로 주어집니다.
//my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  const NumArray = my_string.match(/\d/g).map(Number);
  return NumArray.reduce((acc, crr) => acc + crr, 0);
}

// 예외 처리 : 숫자 없는 경우, 빈 배열
// const NumArray = (my_string.match(/\d/g) || []).map(Number);
