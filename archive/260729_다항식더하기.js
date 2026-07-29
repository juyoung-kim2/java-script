//한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다.
//덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때,
//동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
  const arr = polynomial.split(" + ");
  let xSum = 0;
  let numSum = 0;
  for (let term of arr) {
    if (term.includes("x")) {
      xSum += term === "x" ? 1 : Number(term.replace("x", ""));
    } else {
      numSum += Number(term);
    }
  }
  const result = [];
  if (xSum > 0) {
    result.push(xSum === 1 ? "x" : `${xSum}x`);
  }
  if (numSum > 0) {
    result.push(numSum);
  }
  return result.join(" + ");
}
