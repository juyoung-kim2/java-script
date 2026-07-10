//숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다.
//이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
//숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

function solution(s) {
  const newArray = s.split(" ");

  let value = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === "Z") {
      value = value - Number(newArray[i - 1]);
    } else {
      value = Number(newArray[i]) + value;
    }
  }
  return value;
}

//배열 for문 + reduce 사용하기
function solution2(s) {
  const newArray = s.split(" ");
  const result = [];

  for (let char of newArray) {
    if (char === "Z") {
      result.pop(); //'z'를 만나면 마지막 숫자 빼기
    } else {
      result.push(Number(char));
    }
  }
  //배열의 합 구하기
  return result.reduce((sum, crr) => sum + crr, 0);
}
