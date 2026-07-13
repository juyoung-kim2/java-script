//머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
//머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(order) {
  const answer = order
    .toString()
    .split("")
    .filter((i) => i % 3 == 0 && i !== "0");
  return answer.length;
}

// matchAll([369]/g).length;
// matchAll 사용할 때는 /g 무조건 붙여야함

function solution(order) {
  // 1. 숫자를 문자열로 바꾸고, matchAll로 3, 6, 9를 다 찾습니다. (뒤에 g 꼭 붙이기!)
  const matches = order.toString().matchAll(/[369]/g);

  // 2. 결과물 주머니를 [...]로 털어서 진짜 배열로 만든 뒤, 개수(length)를 셉니다.
  return [...matches].length;
}
