var flag;
flag = true;
flag = false;
var my_number = 100;
var my_string = "100";
var my_Array = [1, 2, 3, 4];
var my_Array2 = [1, 2, 3, 4, 'Dupa'];
var add3 = function (j, h) {
    return j + h;
};
console.log('add3:' + add3(6, 77));
function add2(a, b) {
    return a + b;
}
console.log('add2:' + add2(63, 123));
//var MakePoint = () => 1;
//var MakePoint = function () { return 1; };
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
