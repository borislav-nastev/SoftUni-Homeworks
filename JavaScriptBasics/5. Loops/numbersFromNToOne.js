function printNumbersFromNToOne(input) {
    
    let n = Number(input.shift());

    for (let i = n; i >= 1; i--) {

        console.log(i);
    }
}

printNumbersFromNToOne([10]);