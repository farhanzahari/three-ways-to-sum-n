function is_legible(n: number): boolean {
    if(!Number.isSafeInteger(n)) return false
    if(n < 0) return false
    return true;
} 

// O(1) ops. Matematician approved.
function sum_to_n_a(n: number): number {
    if(!is_legible(n)) return -1;

    return n*(n+1)/2
}

// O(n) ops. Standard factorial function.
function sum_to_n_b(n: number): number {
    if(!is_legible(n)) return -1;

    if (n == 0) return 0

	return n + sum_to_n_c(n - 1);
}


// O(n!) ops. For (slightly more) fun AWS bill.
function sum_to_n_c(n: number): number {
    if(!is_legible(n)) return -1;

    let x = n;

    while (x > 0) {
        x--
    }

    if (n == 0) return 0

	return n + sum_to_n_c(n - 1);
}

const input = 5

console.log(`Sum A: ${sum_to_n_a(input)}`);
console.log(`Sum B: ${sum_to_n_b(input)}`);
console.log(`Sum C: ${sum_to_n_c(input)}`);