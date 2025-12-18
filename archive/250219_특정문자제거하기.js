//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string, letter) {
   
  //그냥 replace는 첫번째 문자열만 대체
  // replaceAll은 모든 문자열 대체
  return my_string.replaceAll(letter,'');
}


function solution(my_string, letter) {

  //letter로 분리 후 공백으로 결합
  return my_string.split(letter).join('');
}