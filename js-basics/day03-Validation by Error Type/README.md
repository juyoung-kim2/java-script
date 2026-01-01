## Day03 - Validation by Error Type

입력 검증 실패 사유를 상태 코드로 분리하고,  
각 상태에 맞는 메시지와 UI 스타일을 적용한 예제입니다.

### What I learned
- boolean 대신 상태 코드(EMPTY, NAN, NON_POSITIVE, OK)를 반환하는 검증 패턴
- 입력 실패 사유에 따라 사용자 메시지를 다르게 제공하는 방식
- 검증 결과에 따라 UI 클래스(result--ok / result--error)를 분기 처리
- 숫자 포맷은 toLocaleString()으로 출력 단계에서만 처리

### Validation Flow
- EMPTY: 가격 또는 수량이 비어 있음
- NAN: 숫자로 변환 불가
- NON_POSITIVE: 0 이하 입력
- OK: 정상 계산
