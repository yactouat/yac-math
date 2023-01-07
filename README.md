# yac-math

## what is this ?

helper functions math library

## pre requisites

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)

## basic usage

- `npm install yac-math`

### available methods

#### returns Array

- `getUniquePrimeFactors( value )` => returns a list of unique prime factors for the given input value
- `getPrimeFactorization( value )` => returns a list of prime factors for the given input value, their product is equal to the input value

#### returns boolean

- `isFactor(nb1, nb2)` => checks if input nb1 is a factor of input nb2
- `isEven( value )`
- `isNaturalNumber( value )`
- `isPrimeNumber( value )`

#### returns Number

- `getPercentageRepresentation(nb1, nb2)` => gets what percentage of nb2 represents nb1

#### returns String

- `getDecimalToHoursAndMinutes` => converts a decimal number to a string representation of hours and minutes
- `getUnitRatioOfNb1ToNb2(nb1, nb2)` => gets a string representation of the ratio of one unit of nb1 to nb2

### importing and using

```javascript
// you can use the default export
const yacMath = require("yac-math");
yacMath.isPrimeNumber(5); // => true

// OR you can pick the functions you want
const { isEven, isNaturalNumber, isPrimeNumber } = require("yac-math");
isPrimeNumber(5); // => true
getPercentageRepresentation(2, 4); // => 50
```

## useful commands

### build

`npm run build` => compiles the code and puts it in the `dist` folder with the setting `es2016` as target.

### test

`npm install` ...

`npm run test` => runs the jest tests. Tests contain theories.

## Contributors

A big thanks goes to the contributors of this project:

- yactouat: [![yactouat](https://avatars.githubusercontent.com/u/37403808?v=4 "yactouat's profile pic")](https://github.com/yactouat)
- petropok: [![petropok](https://avatars.githubusercontent.com/u/50425732?v=4 "petropok's profile pic")](https://github.com/petropok)
- av-feaster: [![av-feaster](https://avatars.githubusercontent.com/u/66401256?v=4 "av-feaster's profile pic")](https://github.com/av-feaster)
- Notkirito18: [![Notkirito18](https://avatars.githubusercontent.com/u/88578935?v=4 "Notkirito18's profile pic")](https://github.com/Notkirito18)
