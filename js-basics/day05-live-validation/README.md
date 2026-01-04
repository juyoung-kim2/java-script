## Day05 - Live Validation (실시간 입력 검증)

가격과 수량 입력 시 버튼 클릭 전에도
즉시 입력값을 검증하고 결과 메시지와 UI 상태를 반영하는 예제입니다.

### What I learned
- input 이벤트를 사용해 실시간 입력 검증을 구현했다
- 입력값을 이벤트마다 다시 읽어 상태를 계산하는 패턴을 이해했다
- 검증 로직(validateInput)과 출력 로직(getMessageByStatus)을 분리했다
- 하나의 handler 함수로 input / click 이벤트를 공통 처리했다
- 구조 분해 할당으로 값 추출 코드를 간결하게 작성했다

### Key Concepts
- input event
- 상태 코드 기반 검증 (EMPTY / NAN / NON_POSITIVE / OK)
- 구조 분해 할당 (Destructuring)
- 실시간 UX 피드백
