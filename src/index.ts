/**
 *
 * checks if input nb1 is a factor of input nb2
 *
 * @param {number} nb1 the number divisor
 * @param {number} nb2 the possible multiple to check
 * @return {boolean} returns true if nb1 is a factor of nb2
 *
 */
export const isFactor = (nb1: number, nb2: number): boolean => {
  // 0 cannot be a factor of any number except for 0
  if (nb2 === 0 && nb1 === 0) {
    return true;
  }
  return (
    Number.isInteger(nb1) && Number.isInteger(nb2) && nb1 > 0 && nb2 % nb1 === 0
  );
};

/**
 *
 * checks if a number is an even number
 *
 * @param {number} nb the number to check
 * @return {boolean} if the number is an even number
 *
 */
export const isEven = (nb: number): boolean => {
  return isFactor(2, nb);
};

/**
 *
 * checks if input nb1 is a multiple of input nb2
 *
 * @param {number} nb1 the possible multiple to check
 * @param {number} nb2 the possible factor to check
 * @return {boolean} returns true if nb1 is a multiple of nb2
 *
 */
export const isMultiple = (nb1: number, nb2: number): boolean => {
  return isFactor(nb2, nb1);
};

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
export const isNaturalNumber = (nb: number): boolean => {
  return nb > 0 && Number.isInteger(nb);
};

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
export const isPrime = (nb: number): boolean => {
  if (isNaturalNumber(nb)) {
    // 1 is not a prime number
    if (nb === 1) return false;
    // every even number that is not 2 is not prime
    if (nb > 2 && isEven(nb)) return false;
    /**
     *  if nb is a multiple of 5, it is not prime
     *  we add this common check for performance reason because it helps us avoid some loop iterations
     * */
    if (nb > 5 && isMultiple(nb, 5)) return false;
    /**
     *  every natural number has at least 2 factors, 1 and itself
     *  this is why we start the counter at 2 in the below loop
     * */
    let numberOfFactors = 2;
    for (let i = 2; i < nb; i++) {
      // there's no need to continue the loop if we already have more than 2 factors
      if (numberOfFactors > 2) break;
      if (isFactor(i, nb)) {
        numberOfFactors++;
      }
    }
    // checking primality by assessing that number of factors is still 2 after the loop
    return numberOfFactors === 2;
  }
  return false;
};

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
export const getDecimalToHoursAndMinutes = (timeInDecimal: number) => {
  if (timeInDecimal <= 0) {
    throw "Input has to be a positive number !";
  }
  let hours = Math.floor(timeInDecimal);
  let hoursStr = Math.floor(timeInDecimal).toString();
  let minutes = Math.round((timeInDecimal - hours) * 60);
  let minutesStr = minutes.toString();
  if (hours < 10) hoursStr = "0" + hours;
  if (minutes < 10) minutesStr = "0" + minutes;
  return hoursStr + ":" + minutesStr;
};

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
export const getPercentageRepresentation = (
  nb1: number,
  nb2: number
): number => {
  if (nb2 == 0) throw "Division by zero impossible !";
  return Number(((nb1 / nb2) * 100).toFixed(2));
};

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
export const getPrimeFactorization = (nb: number): number[] => {
  let result: number[] = [];
  if (isNaturalNumber(nb) && nb > 1) {
    if (isPrime(nb)) {
      return [nb];
    }
    // we get the list of unique prime factors for the input nb
    let uniquePrimeFactorsList = getUniquePrimeFactors(nb);
    // we initialize our result array
    result = [uniquePrimeFactorsList[0]];
    // we divide the input nb by the first prime factor of the list
    let quotient = nb / uniquePrimeFactorsList[0];
    /**
     *
     * while the quotient is not a prime,
     * we add its first prime factor to the result,
     * and we reassign the quotient to its division by this prime factor
     *
     * */
    while (!isPrime(quotient)) {
      const firstQuotientPrimeFactor = getUniquePrimeFactors(quotient)[0];
      result.push(firstQuotientPrimeFactor);
      quotient = quotient / firstQuotientPrimeFactor;
    }
    // if the quotient is a prime we add it to our result
    if (isPrime(quotient)) result.push(quotient);
  }
  return result;
};

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
export const getUniquePrimeFactors = (nb: number): number[] => {
  let results = [];
  if (isPrime(nb)) results.push(nb);
  // we start the loop with the first prime number that we know of
  for (let i = 2; i < nb; i++) {
    // push to array of results if iterated number is a factor of the nb and is prime
    if (isPrime(i) && isFactor(i, nb)) results.push(i);
  }
  return results;
};

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
export const getUnitRatioOfNb1ToNb2 = (nb1: number, nb2: number): string => {
  if (nb1 === 0) throw "No ratio possible when left hand value is zero";
  if (nb2 === 0) return "1:0.00";
  return `1:${Number(nb2 / nb1).toFixed(2)}`;
};
