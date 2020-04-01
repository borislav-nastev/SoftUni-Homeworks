function magicSum(array, givenSum) {

    for (let i = 0; i < array.length - 1; i++) {

        let currentSum = 0;

        for (let j = i + 1; j < array.length; j++) {

            currentSum = array[i] + array[j];

            if (currentSum === givenSum) {
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8],
    27
);