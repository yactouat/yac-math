
/** 
* 
* @function checkIsFactor (arrow func)
*
* @summary checks if input nb1 is a factor of input nb2
*
* @param {nb1} value - the number to check
* @param {nb2} value - the number checked against
* @return {boolean} returns true if nb1 is a factor of nb2
* 
*/
const checkIsFactor = (nb1, nb2) => {
    // 0 cannot be a factor of any number except for 0
    if ( nb2 === 0 && nb1 === 0 )
        return nb1 === 0;
    return !isNaN( nb1 ) 
        && !isNaN( nb2 ) 
        && Number.isInteger( nb1 ) 
        && Number.isInteger( nb2 ) 
        && nb1 > 0 
        && nb2 % nb1 === 0;
}

/** 
* 
* @function checkIsMultiple (arrow func)
*
* @summary checks if input nb1 is a multiple of input nb2
*
* @param {nb1} value - the number to check
* @param {nb2} value - the number checked against
* @return {boolean} returns true if nb1 is a multiple of nb2
* 
*/
const checkIsMultiple = (nb1, nb2) => {
    // 0 is a multiple of every number
    if ( nb2 === 0 && nb1 === 0 )
        return nb1 === 0;
    return !isNaN( nb1 ) 
        && !isNaN( nb2 ) 
        && Number.isInteger( nb1 ) 
        && Number.isInteger( nb2 ) 
        && nb2 !== 0 
        && nb1 % nb2 === 0;
}

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
    return !isNaN( value ) && checkIsFactor(2, value);
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
        // 1 is not a prime number
        if ( value === 1 ) 
            return false;
        // every even number that is not 2 is not prime
        if ( value > 2 && isEven( value ) )
            return false; 
        /**
         *  if value is a multiple of 5, it is not prime
         *  we add this common check for performance reason because it helps us avoid some loop iterations
         * */
        if ( value > 5 && value.toString().endsWith( '5' ) || value >= 10 && value.toString().endsWith( '0' ) )
            return false;
        /**
         *  every natural number has at least 2 factors, 1 and itself
         *  this is why we start the counter at 2 in the below loop
         * */
        let numberOfFactors = 2; 
        for ( let i = 2; i < value; i++ ) {
            if (  checkIsFactor( i, value ) )
                numberOfFactors++;
        }
        // checking primality by assessing that number of factors is still 2 after the loop
        return numberOfFactors === 2;
    }
    return false;
}

/**
 * 
 * @function getUniquePrimeFactorsList (arrow func)
 * 
 * @summary returns a list of unique prime factors for the given input value
 * 
 * @param {any} value - the number to check, will return false if no number
 * @return {Array} an array containing the list of the prime factors | an empty array if the input value is not a natural number
 * 
 */
const getUniquePrimeFactorsList = value => {
    let results = [];
    if ( isPrime( value ) ) 
        results.push( value );
    // we start the loop with the first prime number that we know of
    for ( let i = 2; i < value; i++ ) {
        // push to array of results if iterated number is a factor of the value and is prime
        if ( checkIsFactor( i, value ) && isPrime( i ) )
            results.push( i );
    }
    return results;
};

/**
 * 
 * @function getPrimeFactorsList (arrow func)
 * 
 * @summary returns a list of prime factors for the given input value
 * 
 * @param {any} value - the number to check, will return false if no number
 * @return {Array} an array containing the list of the prime factors, their product is equal to the input value | an empty array if the input value is not a natural number
 * 
 */
const getPrimeFactorsList = value => {
    result = [];
    if ( isNaturalNumber( value ) && value > 1 ) {
        if ( isPrime( value ) )
            return [ value ];
        // we get the list of unique prime factors for the input value
        let uniquePrimeFactorsList = getUniquePrimeFactorsList( value );
        // we initialize our result array
        result = [uniquePrimeFactorsList[0]];
        // we divide the input value by the first prime factor of the list
        let quotient = value / uniquePrimeFactorsList[0];
        /**
         * 
         * while the quotient is not a prime,
         * we add its first prime factor to the result,
         * and we reassign the quotient to its division by this prime factor
         * 
         * */
        while ( !isPrime( quotient ) ) {
            const firstQuotientPrimeFactor = getUniquePrimeFactorsList( quotient )[0];
            result.push( firstQuotientPrimeFactor );
            quotient = quotient / firstQuotientPrimeFactor;
        }
        // if the quotient is a prime we add it to our result
        if ( isPrime( quotient ) )
            result.push( quotient );
    }
    return result;

};

/**
 * 
 * @function getPercentageRepresentation( nb1, nb2 ) (arrow func)
 * 
 * @summary returns a value of what percentage of nb2 represents nb1;
 *          rounded to 2 decimals for readability
 * 
 * @param {any} nb1,nb2 - the numbers to find percentage
 * @return {any} result , a variable where percentage is 
 * @throws "Division by zero impossible !"
 * 
 * TODO possibility to force round down or up
 * TODO possibility to choose number of decimal points in output
 * 
 */
const getPercentageRepresentation = ( nb1, nb2 ) => {
    if ( nb2 == 0 )
        throw "Division by zero impossible !";
    let result = Number(((nb1/nb2) * 100).toFixed(2));
    return result;
};

// console.log( getPrimeFactorsList( 24 ) );

module.exports = {
    checkIsFactor,
    checkIsMultiple,
    isEven,
    isNaturalNumber,
    isPrime,
    getUniquePrimeFactorsList,
    getPrimeFactorsList,
    getPercentageRepresentation
}

