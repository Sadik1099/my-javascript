// let fibo = [0,1];
// for(let i=2; i<=10; i++)
// {
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);

// recusive

function fibonacci(n){
    if(n==0) return [0];
    if(n==1) return [0, 1];
    else{
        let fibo = fibonacci(n-1);
        let nextElemnt = fibo[n-1] + fibo[n-2];
        fibo.push(nextElemnt);
        return fibo;

}
}

let result = fibonacci(10);
console.log(result);
