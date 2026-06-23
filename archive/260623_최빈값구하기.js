//최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
// 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
// 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  const uniqueArray = [...new Set(array)];
  // [숫자, 개수] 배열 만들기
  const counts = uniqueArray.map((el) => [
    el,
    array.filter((item) => item === el).length,
  ]);
  // 최대값 구하기
  const max = Math.max(...counts.map((c) => c[1]));
  // 최대값을 가진 배열 구하기
  const modes = counts.filter((c) => c[1] === max);
  // 1개 이상일 경우 -1 반환, 아닐경우 첫번째 배열의 첫번째 값 반환
  return modes.length > 1 ? -1 : modes[0][0];
}

// reduce 사용하기
function solution(array) {
  const counter = array.reduce(
    (acc, cur) => ({
      ...acc,
      // 기존 숫자가 있으면 +1, 처음이면 1부터 시작
      [cur]: (acc[cur] || 0) + 1,
    }),
    {},
  ); //{1:1, 2:1, 3:3, 4:1} 처럼 출력
  //밸류값에서 최대값 구하기
  const max = Math.max(...Object.values(counter));
  //최대값이랑 일치하는 키값 구하기
  const modes = Object.keys(counter).filter((key) => counter[key] === max);
  // + 문자를 숫자로 바꾸는 방법
  // Number(modes[0])
  return modes.length > 1 ? -1 : +modes[0];
}
