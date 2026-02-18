/* let a=5 ;
let b=10;
const some =(a,b)=> {
    let sum=a+b;
    console.log(sum);
}
some(a,b); */

/* rest operator
    const obj={
    name: "gerad",
    math: 70,
    English: 80,
    science: 90
};

const {name,...marks}=obj;
console.log(marks );
 */

/* spread opperator
arr1=[2,3,4,5,6];
arr2=[8,7,5,3,9,10];
const ans = [...arr1,...arr2];
console.log(ans); */

/* multi value rest argument
function fun(...val){
    return val;
}
let a=10,b=3,c=7,d=56;
const ans=fun(a,b,c,d);
console.log(ans); */

/* function factorial(n){
    let ans = 1;
    if(n ==1 || n == 0){
        return 1;
    }
    else{
        ans= n*factorial(n-1);
        return ans;
    }
    
}
console.log(factorial(6)); */

