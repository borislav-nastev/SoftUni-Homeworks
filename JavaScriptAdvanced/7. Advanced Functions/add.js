function solution(number) {

    return value => {
        return number + value;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
