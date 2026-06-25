//순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  const num = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      num.push(i);
    }
  }
  return num.length;
}

// => 굳이 배열로 넣어서, 그 수를 구하면 비효율!!
// 조건에 맞을 때마다 숫자 +1씩 더하는게 메모리 아낄 수 있음

function solution2(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count;
}

// n이 커지면, 효율성이 떨어질 수 있음. 약수는 제곱근을 기준으로 짝을 이룸
// 제곱근을 기준으로, 제곱근까지만 검사 -> n을 i로 나눴을 때 !== i (쌍) +1
// 제곱근을 기준으로 좌우 대칭의 쌍들을 곱하면, n이 나옴, 나눴을 때 그 값이 i가 아니라는건 하나가 더 있다는 뜻

function solution(n) {
  let count = 0;

  // Math.sqrt(n)은 n의 제곱근까지만 돌라는 뜻!
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++; // i가 약수라면 카운트 +1

      // i의 짝꿍(n / i)이 i와 다른 숫자라면 짝꿍 몫까지 카운트 +1
      if (i !== n / i) {
        count++;
      }
    }
  }

  return count;
}
