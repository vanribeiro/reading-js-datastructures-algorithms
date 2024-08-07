function fibonacciInterative(value: number): number {

    if(value < 1) return 0;
    if(value <= 2) return 1; 
    let fibMinus2 = 0;
    let fibMinus1 = 1;
    let fibN = value;

    for (let i = 2; i <= value; i++) {
        fibN = fibMinus1 + fibMinus2;
        fibMinus2 = fibMinus1;
        fibMinus1 = fibN;
    }

    return fibN;
}

function fibonacciRecursive(value: number): number{
    if(value < 1) return 0;
    if(value <= 2) return 1; 
    return fibonacciRecursive(value - 1) + fibonacciRecursive(value - 2);
}

function fibonacciMemoization(value: number): number {
    if(value < 1) return 0;
    const memo: Array<number> = [0, 1];
    const fibMemo = (n: number): number => {
        if(memo[n] != null) return memo[n];
        return (memo[n] = fibMemo(n - 1) + fibMemo(n - 2));
    }

    return fibMemo(value);
}

export {
    fibonacciInterative,
    fibonacciRecursive,
    fibonacciMemoization
}
