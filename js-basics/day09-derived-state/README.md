# Day08 - 파생 상태(Derived State) 분리

## 목표
입력값과 검증 결과만 state로 관리하고,
총액·할인·배송비·메시지는 **계산 결과(파생 상태)**로 분리한다.
DOM 의존을 최소화하여 재사용 가능한 구조를 만든다.

## 핵심 개념
- State 최소화 (Single Source of Truth)
- 파생 상태(Derived State)
- 순수 함수(Pure Function)
- render 단계에서 조합

## 구조
- state: 사용자 입력과 검증 상태만 저장
  - price
  - qty
  - status

- validateInput(): 입력값 검증
- getTotal(): 총액 계산
- getDiscount(): 할인 적용
- getShippingCost(): 배송비 계산
- getMessageByStatus(): 계산 결과를 기반으로 메시지 생성
- render(): 파생 상태 계산 후 화면 반영

## 흐름
1. input / click 이벤트 발생
2. DOM 값 → state 갱신
3. 입력값 검증 (status 결정)
4. render 단계에서 파생 상태 계산
- total
- discountedTotal
- shippingCost

5. 계산 결과를 조합해 메시지 생성
6. render로 화면 반영

## 배운 점
- state에는 변하는 사실만 둬야 한다
- 계산 가능한 값은 저장하지 말고 필요할 때 계산
- DOM에 의존하지 않는 함수는 재사용과 테스트가 쉽다
- render는 “그리기”가 아니라 조합 책임을 가진다

