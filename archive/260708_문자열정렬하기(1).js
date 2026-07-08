//문자열 my_string이 매개변수로 주어질 때,
//my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution(my_string) {
  const remove = my_string.replace(/[a-z]/g, "");
  const NumArray = remove.split("").map(Number);
  return NumArray.sort((a, b) => a - b);
}

// /\d/ 와 match() 사용하기
function solution2(my_string) {
  const remove = my_string.match(/\d/g);
  return remove.sort((a, b) => a - b);
}
