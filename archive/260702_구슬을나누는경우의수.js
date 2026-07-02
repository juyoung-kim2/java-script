//머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다.
//  머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때,
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

function solution(balls, share) {
  const factorial = (n) => {
    const bigN = BigInt(n);
    if (bigN <= 1n) return 1n;
    return bigN * factorial(bigN - 1n);
  };
  const result =
    factorial(balls) / (factorial(balls - share) * factorial(share));
  return Number(result);
}

// BinInt : Number 원시 값이 안정적으로 나타낼 수 있는 최대치보다 큰 정수를 표현할 수 있는 내장 객체
// 소수점 결과를 포함하는 연산을 BigInt와 사용하면 소수점 이하는 사라집니다.
// 소수점이 중요한 연산에는 사용 x, 무조건 정수만 나오는 거대 숫자 연산에 사용
