function soma (a,b){
    return a + b
}

function subtrair (a,b){
    return a - b
}

function fatorial (n){
   return n <= 1 ? 1 : n * fatorial(n-1)
}

module.exports ={
    soma,
    subtrair,
    fatorial,
}
