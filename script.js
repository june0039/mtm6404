//return true if the provided number is even
// false if odd

function isEven (number) {
//4 is even because 4/2 has a remainder of 0

    return number % 2 === 0  //if true even
}

console.log('Is 12 even? , isEven(12))//true
console.log('Is 13 even? , isEven(13)) //false

//isPrime
//Test if a number is isPrime
//return true if isPrime
//return false if not isPrime

//3, 5, 7

function isPrime (number) {
    //5 % 4 === 0, if true, then not isPrime
    // 5 % 3 === 0,
    // 5 % 2 === 0, 
    //then it is prime number

    for (let i = number -1; i > 1, i--){
        if (number % i === 0){
            return false;

        }

    }

    return true;

}

console.log('Is 12 prime?' , isPrime(12))// false
console.log('Is 13 prime?' , isPrime(13))// true
