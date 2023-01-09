# yac-math

<!-- TOC -->

- [yac-math](#yac-math)
  - [what is this ?](#what-is-this-)
  - [DISCLAIMER](#disclaimer)
  - [pre requisites](#pre-requisites)
  - [basic usage](#basic-usage)
    - [available methods](#available-methods)
      - [returns array](#returns-array)
      - [returns boolean](#returns-boolean)
      - [returns number](#returns-number)
      - [returns object](#returns-object)
      - [returns string](#returns-string)
    - [importing and using](#importing-and-using)
  - [CI/CD](#cicd)
  - [Contributors](#contributors)

<!-- /TOC -->

## what is this ?

helper functions math library

## DISCLAIMER

PLEASE DO NOT USE ANY VERSION PRIOR TO 3.1.5 AS THEY ARE NOT STABLE (I WAS MESSING AROUND TRYING TO FIND A GOOD WORKFLOW FOR CI/CD) !

## pre requisites

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)

## basic usage

- `npm install yac-math`

### available methods

#### returns array

- `getAllFactorizations(nb)` => returns a list of all factorizations for the given input value as unique pairs of factors
- `getUniquePrimeFactors(nb)` => returns a list of unique prime factors for the given input value
- `getPrimeFactorization(nb)` => returns a list of prime factors for the given input value, their product is equal to the input value

#### returns boolean

- `isFactor(nb1, nb2)` => checks if input nb1 is a factor of input nb2
- `isEven(nb)`
- `isNaturalNumber(nb)`
- `isPrime(nb)`

#### returns number

- `factorial(nb)` => returns the factorial of the given input nb
- `getPercentageRepresentation(nb1, nb2)` => gets what percentage of nb2 represents nb1

#### returns object

- `getDecimalToHoursAndMinutes` => converts a decimal number to an object representation of hours and minutes

#### returns string

- `getUnitRatioOfNb1ToNb2(nb1, nb2)` => gets a string representation of the ratio of one unit of nb1 to nb2

### importing and using

```javascript
// you can use the default export
const yacMath = require("yac-math");
yacMath.isPrime(5); // => true

// OR you can pick the functions you want
const { isEven, isNaturalNumber, isPrime } = require("yac-math");
isPrime(5); // => true
getPercentageRepresentation(2, 4); // => 50
```

## CI/CD

testing with jest, building with tsc, and publishing to NPM are all automated using Github Actions

## Contributors

a big thanks goes to the contributors of this project:

<table>
<tbody>
    <tr>
        <td align="center"><a href="https://github.com/yactouat"><img src="https://avatars.githubusercontent.com/u/37403808?v=4" width="100px;" alt="yactouat"/><br /><sub><b>Yactouat</b></sub></a><br /><a href="https://github.com/yactouat"></td>
        <td align="center"><a href="https://github.com/petropok"><img src="https://avatars.githubusercontent.com/u/50425732?v=4" width="100px;" alt="petropok"/><br /><sub><b>petropok</b></sub></a><br /><a href="https://github.com/petropok"></td>
        <td align="center"><a href="https://github.com/av-feaster"><img src="https://avatars.githubusercontent.com/u/66401256?v=4" width="100px;" alt="av-feaster"/><br /><sub><b>av-feaster</b></sub></a><br /><a href="https://github.com/av-feaster"></td>
        <td align="center"><a href="https://github.com/Notkirito18"><img src="https://avatars.githubusercontent.com/u/88578935?v=4" width="100px;" alt="Notkirito18"/><br /><sub><b>Notkirito18</b></sub></a><br /><a href="https://github.com/Notkirito18"></td>
        <td align="center"><a href="https://github.com/dejanko25"><img src="https://avatars.githubusercontent.com/u/92360957?v=4" width="100px;" alt="dejanko25"/><br /><sub><b>dejanko25</b></sub></a><br /><a href="https://github.com/dejanko25"></td>
    </tr>
</tbody>
</table>
