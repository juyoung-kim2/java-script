## Day02 - Input Validation Calculator

가격과 수량을 입력받아 총액을 계산하고,  
잘못된 입력을 사전에 검증하는 예제입니다.

### What I learned
- input.value는 문자열이므로 Number()로 변환 후 처리해야 함
- 입력값 검증 로직을 함수로 분리해 이벤트 코드를 단순화함
- validateInput 함수는 boolean(true/false)을 반환하도록 설계함
- Number.isNaN()을 사용해 숫자가 아닌 입력을 정확히 판별함
- 계산은 숫자로, 출력은 textContent로 한 번만 처리함

### Validation Rules
- 가격 또는 수량이 0 이하인 경우 실패
- 숫자로 변환할 수 없는 값(NaN)은 실패