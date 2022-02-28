/*
URL 다루기
*/

var url1 = "http://www.mysite.com/user?no=10&name=둘리"

// location.href = url1;

// 1. escape: URL 전부 encoding, 사용X, deprecated
var url2 = escape(url1);
console.log(url2);

// 2. encodeURI: parameter만 encoding, user O
var url3 = encodeURI(url1);
console.log(url3);
// location.href = encodeURI;

// 3. encodeURIComponent: 값만 엔코딩 해야하는 경우. 사용 O
var url4 = encodeURIComponent(url1); // 잘 못 사용한 경우
console.log(url4);

// 4. 만들어야 할 URL
// http://www.mysite.com/user?no=10&name=둘리&email=dooly@gmail.com
var url = "http://mysite.com/user";
var params = {
    name: '둘리', 
    email: 'dooly@gmail.com',
    no: 10
};

/*
jQuery = function() {}
$ = jQuery;

$.ajax ({
    url: url, 
    type: 'post',
    data: toQueryString(o)
})
*/


var toQueryString = function(o) {
    var qs = [];

    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs;
}

var url5 = url + "?" + toQueryString(params);
console.log(url5);