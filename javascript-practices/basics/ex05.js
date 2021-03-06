/*
구문 (statement)
1. 자바 실행 단위
2. 구문의 구성 요소
    - 값, 연산자: 표현식
    - 주석: 구문을 구성해도 실행되지 않는다.
    - 예약어들: if, const, for, ...
3. 구문의 예
    - 주석 구문
    - if(1 -1 == 0) {} // 조건문
    - if ~ else
    - switch
    - for, while, do~while, for~in
4. 공백: 토큰 분리
5. 세미콜론: 
    - 원칙적으로 구문을 분리한다.
    - 표현식을 표현식구문으로 만들어서 표현식을 실행하게 한다.
6. 개행
    - 세미콜론을 대체한다.
    - 토큰 분리
    - 상황에 따라 1/ 2: 자바스크립트 엔진이 에러없는 실행을 우선 원칙으로 1 / 2 판단

*/    // 리터럴 뒤에 변수가 있으면 에러

// 6-1 예
var s = "hello world!"
console.log(s)

// 6-2 예
a
=
2
+
2

i= 10
console.log(i)
