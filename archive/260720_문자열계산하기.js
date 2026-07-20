//my_string은 "3 + 5"처럼 문자열로 된 수식입니다.
//문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

function solution(my_string) {
  const array = my_string.split(" ");
  let result = Number(array[0]);

  for (let i = 1; i < array.length; i += 2) {
    const operator = array[i];
    const nextNum = Number(array[i + 1]);

    if (operator === "+") {
      result += nextNum;
    } else {
      result -= nextNum;
    }
  }
  return result;
}
