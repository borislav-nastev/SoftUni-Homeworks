function englishNameOfTheLastDigit(number) {

   let digitsObj = {
       1: "one",
       2: "two",
       3: "three",
       4: "four",
       5: "five",
       6: "six",
       7: "seven",
       8: "eight",
       9: " nine",
       0: "zero"
   } ;

   let numberToString = String(number);
   let lastDigit = numberToString[numberToString.length - 1];
   console.log(digitsObj[lastDigit]);
}

englishNameOfTheLastDigit(512);