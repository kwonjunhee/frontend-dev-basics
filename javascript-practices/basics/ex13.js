/*
String primitive type 과 String 객체 메소드 (String.prototype.*)
*/

s = "hello";
s.substring(); // new String(s).substring()

// 배열처럼 접근이 가능하다.
var str1 = 'Hello World';
for (var i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = 'Hello';
var str3 = 'World';
var str4 = str2 + ' ' + str3;
console.log(str4);

// 캐스팅
var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean:" + true;
console.log(str6);

// 메소드
var str7 = "String1 String2 String3";

var index = str7.indexOf('String2');
console.log(index);

var index = str7.indexOf('String4');
console.log(index); // 찾지 못하면 -1

var str8 = str7.substr(10, 3); // index, count
console.log(str8);

var str9 = str7.substring(10, 13); // index, last index -1
console.log(str9);

var a = str7.split(" ");
console.log(a);

var str11 = "abcdef";
var a = str11.split(":");
console.log(a);