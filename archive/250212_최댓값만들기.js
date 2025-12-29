//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.


// 배열 정렬
// (a,b) => a-b : 오름차순 (작>큰)
// (a,b) => b-a : 내림름차순 (큰>작)
function solution(numbers) {

  const sortedNumbers = numbers.sort((a,b) => b-a);

  return sortedNumbers[0] * sortedNumbers[1]
}

