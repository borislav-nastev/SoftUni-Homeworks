function palindrome(array) {

    let isPalindrome = false;

    for (let i = 0; i < array.length; i++) {

        let currentElement = array[i];
        let reversedElement = Number(reverseElement(array[i]));

        isPalindrome = currentElement === reversedElement;

        console.log(isPalindrome);
    }

    function reverseElement(element) {
        element = String(element)
            .split("")
            .reverse()
            .join("");

        return element;
    }
}

palindrome([123, 323, 421, 121]);