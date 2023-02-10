function fibonacci(num) {
    let listaNums = [1];
    a = 0;
    b = 1;

    for(let i = 1; i < num; i++){
        c = a+b;
        a = b;
        b = c;
        console.log(b)
        listaNums = [...listaNums, b]
    }
    return listaNums
}

console.log(fibonacci(6))

///fibonacci con while:
function fibo(num) {
    let listaNums = [1];
    let i = 1;
    let a = 0;
    let b = 1;

    while(i < num){
        i++;
        c = a+b;
        a = b;
        b = c;
        console.log(b)
        listaNums = [...listaNums, b]
    }
    return listaNums
}

console.log(fibo(6))