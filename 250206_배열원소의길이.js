//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 return하도록 solution 함수를 완성해주세요.


// for ...of
function solution(strlist) {
  var answer = [];
  
  for ( let item of strlist ){

    num = item.length;
    answer.push(num);
    
  }
  return answer;
}


// for문
function solution(strlist) {
  var answer = [];
  
  for ( let i = 0; i < strlist.length; i++){

    answer.push(strlist[i].length);
    
  }
  return answer;
}