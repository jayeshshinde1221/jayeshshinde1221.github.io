var value1=21;
var value2=21;

var value=21+21;
console.log(value);


var value=21*21;
console.log(value);


var value=21-21;
console.log(value);

var value=21/21;
console.log(value);

//-----------------------------------------------------------------------------------------------------
function add(a=0,b=0){
    console.log(typeof(a),typeof(b))
    return a+b

}

var first=prompt("Enter first number");
var second=prompt("Enter second number");

var firstValue = parseInt(first);
var secondValue = parseInt(second);


var addedValue = add(firstValue,secondValue)
console.log(addedValue)

