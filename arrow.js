const printValue = ()=>5;

const value=printValue();
console.log(value);

const doubleIt = (x)=>x*2;
const result = doubleIt(4);
console.log(result);

const doMath=(x,y,z)=>{
    const sum=x+y+z;
    const mult=sum*y;
    const div=mult/z;

    return div;
}
console.log(doMath(4,6,2));