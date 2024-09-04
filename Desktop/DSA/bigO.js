function add (n){
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let t1 = performance.now();
add(100);
let t2 = performance.now();
console.log("Time taken: " + ((t2 - t1) / 1000) + " seconds");
