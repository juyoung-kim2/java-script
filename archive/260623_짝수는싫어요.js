//정수 n이 매개변수로 주어질 때,
// n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let answer = [];
  //n 이하의 홀수 구하기
  for (let i = 1; i <= n; i++) {
    if (!(i % 2 == 0)) {
      answer.push(i);
    }
  }
  return answer;
}

// for문 자체를 홀수만 돌게 하기
function solution(n) {
  let answer = [];

  // i가 1부터 시작해서 2씩 커지니까 (1, 3, 5, 7...) 무조건 홀수만 나옴
  // 그럼 if문 안써도 됨!!
  for (let i = 1; i <= n; i += 2) {
    answer.push(i);
  }

  return answer;
}
