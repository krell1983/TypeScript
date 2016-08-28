
var flag:boolean;
flag = true;
flag = false;

var my_number:number = 100;

var my_string:string = "100";

var my_Array:number [] = [1,2,3,4];

var my_Array2:any [] = [1,2,3,4,'Dupa'];

var add3 = ( j:number , h:number):number => {
  return j + h;
}

console.log('add3:'+add3(6,77));

function add2( a:number , b:number):number{
  return a + b;
}

console.log('add2:'+add2(63,123));


//var MakePoint = () => 1;
//var MakePoint = function () { return 1; };

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
