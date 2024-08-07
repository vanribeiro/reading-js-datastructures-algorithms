function factorialIterative(value: number): number | undefined{
    if (value < 0) return undefined;
    let total = 1;
    for (let n = value; n > 1; n--) {
        total = total * n;
    }

    return total;
}

function factorialRecursive(value: number): number {
    if (value < 0) throw new Error('negative numbers are not permitted');
    if (value === 0 || value === 1) return 1;
    return value * factorialRecursive(value - 1);
}

export {
    factorialIterative,
    factorialRecursive
}