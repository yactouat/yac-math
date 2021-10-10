# yac-math

helper functions math library

## basic usage

- ```npm install yac-math```

### available methods

#### returns Array

- ```getUniquePrimeFactorsList( value )``` => returns a list of unique prime factors for the given input value
- ```getPrimeFactorsList( value )``` => returns a list of prime factors for the given input value, their product is equal to the input value

#### returns boolean

- ```checkIsFactor(nb1, nb2)``` => checks if input nb1 is a factor of input nb2
- ```checkIsMultiple(nb1, nb2)``` => checks if input nb1 is a multiple of input nb2
- ```isEven( value )```
- ```isNaturalNumber( value )```
- ```isPrimeNumber( value )```

#### returns Number

- ```getPercentageRepresentation(nb1, nb2)``` => gets what percentage of nb2 represents nb1

#### returns String

- `getUnitRatioOfNb1ToNb2(nb1, nb2)` => gets a string representation of the ratio of one unit of nb1 to nb2

### importing and using

```javascript

    // you can use the default export
    const yacMath = require( 'yac-math' );
    yacMath.isPrimeNumber( 5 ); // => true

    // OR you can pick the functions you want
    const {isEven, isNaturalNumber, isPrimeNumber} = require( 'yac-math' );
    isPrimeNumber( 5 ); // => true
    getPercentageRepresentation(2, 4); // => 50

```

## tests

I use Jest and jest-theories for testing. You can run the tests with ```npm run test```.
