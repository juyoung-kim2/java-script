//우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다.
//  입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
// a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다.
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

function solution(age) {
  const ArrayAge = age.toString().split("");
  const alphabet = Array.from({ length: 26 }, (v, i) =>
    String.fromCharCode(97 + i),
  );
  const newAge = [];
  for (let i = 0; i < ArrayAge.length; i++) {
    newAge.push(alphabet[ArrayAge[i]]);
  }

  return newAge.join("");
}

// a-z까지 필요 없음!! j까지 있으면 됨 -> 알파벳 배열 직접 타이핑 하는게 더 현실적임
// map으로 더 간단하게 가능

function solution(age) {
  const alphabet = "abcdefghij";

  // age를 쪼갠 배열을 돌면서(map), 각각의 숫자(d)를 알파벳으로 교체하고 바로 합치기(join)!
  return age
    .toString()
    .split("")
    .map((d) => alphabet[d])
    .join("");
}
