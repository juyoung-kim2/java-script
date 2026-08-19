//문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
//my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  const result = my_string.match(/\d+/g)?.map(Number) || [];
  return result.reduce((acc, cur) => acc + cur, 0);
}

//match는 항상 문자열 배열을 반환
//map으로 숫자 타입으로 변경
//옵셔널 체이닝과 기분값 빈 배열 함께 쓰기!
// \d+: 연속된 숫자 덩어리 (1개 이상 연속된 숫자를 찾는 패턴)
