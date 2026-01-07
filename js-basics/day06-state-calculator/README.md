# Day06 - State 기반 계산기 리팩토링

## 목표
입력값, 검증 상태, 메시지를 하나의 state 객체로 관리하며  
DOM 조작과 비즈니스 로직을 분리한다.

## 핵심 개념
- Single Source of Truth (state)
- 상태 기반 렌더링
- handler / validate / render 역할 분리

## 구조
- state: 현재 앱 상태 저장
- validateInput(): 입력값 검증
- getMessageByStatus(): 상태에 따른 메시지 생성
- render(): 화면 반영 전담

## 흐름
1. input / click 이벤트 발생
2. state 값 갱신
3. 상태 검증
4. 메시지 생성
5. render로 화면 반영

## 배운 점
- DOM 의존 로직 제거
- 확장 가능한 구조 설계
- React/Vue state 개념 이해
