// 3!=1x2x3;
// 6! = 1x2x3x4x5x6;

// let factorial = 1;

// for(let i=1;i<=10;i++)
// {
//     factorial = factorial*i;
//    // console.log(i, factorial);
// }
// console.log(factorial);

//while loop
// function factorial(n){
//     let i=1;
//     let fact =1;
//     while(i<=n){
//         fact*=i;
//         i++;
//     }
//     return fact;
// }
// let result = factorial(6);
// console.log(result);

//recusive 

function factorial(n)
{
    if(n == 0)
    {
        return 1;
    }
    else{
        return n * factorial(n-1);
    }

}
let resilt = factorial(4);
console.log(resilt);