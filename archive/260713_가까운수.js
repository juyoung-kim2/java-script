//정수 배열 array와 정수 n이 매개변수로 주어질 때,
//array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  array.sort((a, b) => a - b);
  return array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b))[0];
}

// 가장 가까운 수가 여러 개일 경우 더 작은 수를 return한다 -> 1차적으로 정렬을 맞추고, 그 후에 절대값으로 다시 정렬
// ex ) [22,18,30] n=20 절대값은 2로 동일, 22가 앞에 있어서 22를 리턴함 -> [18,22,30]으로 정렬 후, 절대값으로 정렬하면 18 리턴
