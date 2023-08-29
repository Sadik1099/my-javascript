function isPrime(n){
    for(let i=2;i<n;i++)
    {
        if(n%i == 0)
        return 'Not a prime Number';
    }
    return 'Is a prime Number';
}

let result = isPrime(121);
console.log(result);
