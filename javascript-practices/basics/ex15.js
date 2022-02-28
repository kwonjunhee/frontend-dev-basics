/*
Data 객체 메소드 (Date.prototype.*)
*/

// 현재 시간
var now = new Date();
console.log(now);

// 2022년 02-22
var d1 = new Date(2022, 1, 22) // year, month -1, day
console.log(d1);

// 2022년 02-22 22:22:22
var d2 = new Date(2022, 1, 22, 22, 22, 22) // year, month -1, day
console.log(d2);

// 객체 메소드
console.log(
    "년도: " + (now.getYear() +1900) + "\n" +
    "월: " + (now.getMonth() +1) + "\n" +
    "일: " + now.getDate() + "\n" +
    "시: " + now.getHours() + "\n" +
    "분: " + now.getMinutes() + "\n" +
    "초: " + now.getSeconds() + "\n" +
    "밀리초: " + now.getMilliseconds() + "\n" 
);