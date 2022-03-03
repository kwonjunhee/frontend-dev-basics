/*
분리되지 않는 app
*/
// require는 module.exports 쓰지말고 exports = module.exports; 쓰기!!

var app = function() {
    var app = {};
    app.textContext = "Hello World";

    return app;
}

console.log(app());