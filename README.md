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
  - [Contribution guidelines](#contribution-guidelines)
  - [Contributors](#contributors)

<!-- /TOC -->

## what is this ?

helper functions math library

## DISCLAIMER

I DEPRECATED ALL 1.x.x 2.x.x VERSIONS THAT ARE NOT THE LATEST OF THEIR MAJOR VERSION, BUT YOU MIGHT STILL HAVE THEM IN YOUR CACHE, SO PLEASE MAKE SURE YOU'RE USING THE LATEST VERSION !

AS FOR VERSION 3.x.x, PUBLISHED VERSIONS START FROM 3.1.5 !

I WAS MESSING AROUND TRYING TO FIND A GOOD WORKFLOW FOR CI/CD ! I'M SORRY FOR THE INCONVENIENCE !

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

testing with jest, building with tsc, and publishing to NPM are all automated using Github Actions under the `.github/workflows` folder;

the testing and building part happens whenever a pull request is created or updated

the publishing to NPM part happens whenever a new release is created on Github

## Contribution guidelines

dear past, present, and future contributors, you have my many thanks, but please follow these guidelines:

- please use comments to explain your code, even if it's obvious to you, it might not be to someone else
- please test your code thourougly in the the `./tests` folder
- you are free to arrange the code, the folder structure, the file names, etc. as you see fit if you're able to provide a good reason for it
- if you're introducing a breaking change in the usage of this lib, please notify me in the PR so I can update the version number accordingly
- dont bother building the code, just test it, the CI will build it for you when you PR

that's all, thank you for your time !

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
