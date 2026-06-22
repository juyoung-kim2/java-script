// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1,
// 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다.
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
  const answer = [];
  const commonDenom = denom1 * denom2;
  const commonNumer = denom1 * numer2 + denom2 * numer1;

  //최대공약수 (유클리드 호제법)
  //a를 b로 나눈 나머지를 구한다 -> 나머지가 0이면, b가 최대공약수가 된다
  //0이 아니면,a에 b를, b에 나머지를 할당하고 0이 될때까지 반복
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  //화살표 함수, 삼항 연산자로 압축
  //const gcd = (a,b) => b===0 ? a : gcd(b, a%b);

  const realgcd = gcd(commonDenom, commonNumer);

  //기약함수 : 분자 분모를 최대 공약수로 나눈 값
  answer.push(commonNumer / realgcd, commonDenom / realgcd);
  return answer;
}
