//문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
  const stringArray = my_string.split("");

  [stringArray[num1], stringArray[num2]] = [
    stringArray[num2],
    stringArray[num1],
  ];
  return stringArray.join("");
}

//구조분해할당
