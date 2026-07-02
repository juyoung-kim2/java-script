//가위는 2 바위는 0 보는 5로 표현합니다.
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
//  rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

function solution(rsp) {
  const rspArray = rsp.split("");
  const answer = rspArray.map((el) => {
    if (el === "2") {
      return "0";
    } else if (el === "0") {
      return "5";
    } else if (el === "5") {
      return "2";
    }
  });

  return answer.join("");
}

// 객체 사용하면 더 간편해짐
// 스프레드 연산자, split 같은 역할

function solution2(rsp) {
  const windRules = {
    2: "0",
    0: "5",
    5: "2",
  };

  return [...rsp].map((el) => windRules[el]).join("");
}
