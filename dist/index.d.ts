/**
 * returns factorial of the given number
 *
 * @param {number} nb base of the factorial
 *
 * @return {number} for whole numbers equal to or greater than 0
 *
 * @throws "Factorial for negative numbers is undefined!"
 * @throws "Factorial for decimal numbers is undefined!"
 */
export declare const factorial: (nb: number) => number;
/**
 *
 * checks if input nb1 is a factor of input nb2
 *
 * @param {number} nb1 the possible factor to check
 * @param {number} nb2 the number to check
 * @return {boolean} returns true if nb1 is a factor of nb2
 *
 */
export declare const isFactor: (nb1: number, nb2: number) => boolean;
/**
 *
 * checks if a number is an even number
 *
 * @param {number} nb the number to check
 * @return {boolean} if the number is an even number
 *
 */
export declare const isEven: (nb: number) => boolean;
/**
 *
 * checks if input nb1 is a multiple of input nb2
 *
 * @param {number} nb1 the possible multiple to check
 * @param {number} nb2 the possible factor to check
 * @return {boolean} returns true if nb1 is a multiple of nb2
 *
 */
export declare const isMultiple: (nb1: number, nb2: number) => boolean;
/**
 *
 * checks if a number is a natural number
 *
 * a natural number is any positive integer > 0
 *
 * @param {number} nb the number to check
 * @return {boolean} if the number is a natural number
 *
 */
export declare const isNaturalNumber: (nb: number) => boolean;
/**
 *
 * checks if a number is a prime number,
 *
 * a prime number is a natural number that has exactly two factors,
 * meaning it is only divisible by 1 and itself
 *
 * @param {number} nb the number to check, will return false if no number
 * @return {boolean} if the number is a natural number
 *
 */
export declare const isPrime: (nb: number) => boolean;
/**
 *
 * gets a string representation, in hours and minutes, of a decimal number
 *
 * @param {number} timeInDecimal
 *
 * @return {string} the hours:minutes string representation of the input decimal number
 * @throws "Input has to be a positive number !"
 *
 */
export declare const getDecimalToHoursAndMinutes: (timeInDecimal: number) => string;
/**
 *
 * gets what percentage of nb2 represents nb1;
 *
 * rounded to 2 decimals for readability
 *
 * @param {number} nb1 the part
 * @param {number} nb2 the whole
 *
 * @return {number} the percentage of nb2 represented by nb1
 * @throws "Division by zero impossible !"
 *
 */
export declare const getPercentageRepresentation: (nb1: number, nb2: number) => number;
/**
 *
 * @function getPrimeFactorization
 *
 * @summary gets a list of prime factors for the given input value
 *
 * @param {number} nb the number to check
 * @return {Array} an array containing the list of the prime factors, their product is equal to the input nb
 *
 */
export declare const getPrimeFactorization: (nb: number) => number[];
/**
 *
 * @function getUniquePrimeFactors
 *
 * @summary returns a list of unique prime factors for the given input value
 *
 * @param {number} nb the number to check
 * @return {Array} an array containing the list of the prime factors
 *
 */
export declare const getUniquePrimeFactors: (nb: number) => number[];
/**
 *
 * returns how many items there is for one nb1 unit per nb2 unit,
 *
 * as in "for 1 unit of nb1, there are n units of nb2"
 *
 * @param {number} nb1 the first number to compare
 * @param {number} nb2 the second number to compare
 * @return {string} the ratio expressed in terms of '1:n', rounded to 2 decimals
 *
 * @throws "No ratio possible when left hand value is zero"
 *
 */
export declare const getUnitRatioOfNb1ToNb2: (nb1: number, nb2: number) => string;
