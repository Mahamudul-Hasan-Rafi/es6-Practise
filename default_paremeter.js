function add(num1=0, num2){
    if(num2==undefined)
      num2=22222;
    return num1+num2;
}

console.log(add());
console.log(add("LOL"));
console.log(add(3,5));