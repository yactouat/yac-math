
/** 
* 
* @function isEven (arrow func)
*
* @summary checks if a number is an even number
*
* @param {any} value - the number to check, will return false if no number
* @return {boolean} if the number is an even number
* 
*/
const isEven = value => {
    return !isNaN( value ) && value % 2 === 0;
}

/** 
* 
* @function isNaturalNumber (arrow func)
*
* @summary checks if a number is a natural number, a natural number is any positive integer > 0
*
* @param {any} value - the number to check, will return false if no number
* @return {boolean} if the number is a natural number
* 
*/
const isNaturalNumber = value => {
    return !isNaN( value ) && value > 0 && Number.isInteger( value );
}


/**
 * 
 * @function isPrime (arrow func)
 * 
 * @summary checks if a number is a prime number, 
 *          a prime number is a natural number that has exactly two factors,
 *          meaning it is only divisible by 1 and itself
 * 
* @param {any} value - the number to check, will return false if no number
* @return {boolean} if the number is a natural number
 * 
 */
const isPrime = value => {
    if ( isNaturalNumber( value ) ) {
        // every even number that is not 2 is not prime
        if ( value > 2 && isEven( value ) )
            return false; 
        /**
         *  every natural number has at least 2 factors, 1 and itself
         *  this is why we start the counter at 2 in the below loop
         * */
        let numberOfFactors = 2; 
        for ( let i = 2; i < value; i++ ) {
            if ( value % i === 0 )
                numberOfFactors++;
        }
        // checking primality by assessing that number of factors is still 2 after the loop
        return numberOfFactors === 2;
    }
    return false;
}

// TODO factorize a number (factors list, factors pairs, prime factorization)

// console.log( isPrime( 2 ) );

module.exports = {
    isEven,
    isNaturalNumber,
    isPrime
}

