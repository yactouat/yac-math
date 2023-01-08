# yac-math

## what is this ?

helper functions math library

## pre requisites

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)

## basic usage

- `npm install yac-math`

### available methods

#### returns array

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

## useful commands

### build

`npm run build` => compiles the code and puts it in the `dist` folder with the setting `es2016` as target.

### test

`npm install` ...

`npm run test` => runs the jest tests. Tests contain theories.

### publish

`npm run build` ...

`npm publish` => publishes the package to npm

## Contributors

A big thanks goes to the contributors of this project:

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
