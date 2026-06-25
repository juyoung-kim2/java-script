//사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다.
// 사분면은 아래와 같이 1부터 4까지 번호를매깁니다. x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다.
// 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

function solution(dot) {
  const x = dot[0] > 0;
  const y = dot[1] > 0;
  x && y
    ? (answer = 1)
    : !x && !y
      ? (answer = 3)
      : !x && y
        ? (answer = 2)
        : (answer = 4);

  return answer;
}

// 위 코드는 가독성이 안좋음..

function solution(dot) {
  const [x, y] = dot; // 구조 분해 할당으로 x, y를 꺼내면 더 직관적!

  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
}

//x양수, 음수냐에 따라서 y 조건으로 풀기
function solution(dot) {
  const [x, y] = dot;
  if (x > 0) return y > 0 ? 1 : 4; // x가 양수일 때 y에 따라 1 또는 4
  if (x < 0) return y > 0 ? 2 : 3; // x가 음수일 때 y에 따라 2 또는 3
}

function solution(dot) {
  const [num, num2] = dot;
  // 부호가 같은지 다른지 판별
  const check = num * num2 > 0;
  // x 먼저 조건으로 걸고, 부호같은지로 판별
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
