//function declaration
function mul(x, y) {
  return x * y;
}
console.log(mul(5, 3)); 
//function expression
const cube = function (num) {
  return num * num *num;
};
console.log(cube(9)); 
//arrow function
const array = [1, 5, 0, 4, 8];
const newarray = array.map(num => num * 2);
console.log(newarray); 

//callback function
function add(a,b){
  return a+b ;
}
function cal(a,b,operation)
{
  return operation(a,b);
}
console.log(cal(5,3,add))