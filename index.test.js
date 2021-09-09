
const {checkIsMultiple, isEven, isPrime, isNaturalNumber, getPrimeFactorsList, getUniquePrimeFactorsList} = require( "./index" );
const jestTheories = require( "jest-theories" );
 
describe( "value is a multiple", () => {
    const theories = [
        {input1: 64, input2: 32, expected: true},
        {input1: 0, input2: 0, expected: true},
        {input1: 0, input2: 1124123, expected: true},
        {input1: 'x', input2: 2, expected: false},
        {input1: 1, input2: 0,   expected: false},
        {input1: 1.3, input2: 1, expected: false},
        {input1: 500, input2: 5, expected: true},
        {input1: -4, input2: -2,  expected: true},
        {input1: -2, input2: 2,  expected: true},
        {input1: 2, input2: 4,  expected: false}
    ];
    jestTheories.default( 'the value {input1} is a multiple of {input2} => {expected}', theories, theory => {
        expect( checkIsMultiple( theory.input1, theory.input2 ) ).toBe( theory.expected );
    });
});

describe( "value is even", () => {
    const theories = [
        // check out https://www.bbc.com/news/magazine-20559052 if you have a doubt about 0 being even
        {input: 0,   expected: true}, 
        {input: 'x', expected: false},
        {input: 1,   expected: false},
        {input: 1.3, expected: false},
        {input: 500, expected: true},
        {input: 2,  expected: true},
        {input: 66,  expected: true},
    ];
    jestTheories.default( 'the value {input} is even => {expected}', theories, theory => {
        expect( isEven( theory.input ) ).toBe( theory.expected );
    });
});

describe( "value is a natural number", () => {
    const theories = [
        {input: 0,   expected: false},
        {input: 'x', expected: false},
        {input: 1,   expected: true},
        {input: 1.3, expected: false},
        {input: 500, expected: true},
        {input: -2,  expected: false}
    ];
    jestTheories.default( 'the value {input} is a natural number => {expected}', theories, theory => {
        expect( isNaturalNumber( theory.input ) ).toBe( theory.expected );
    });
});
 
describe( "number is prime", () => {
    const theories = [
        {input: 'x',  expected: false},
        {input: -3,  expected: false},
        {input: 0,  expected: false},
        {input: 1,  expected: false},
        {input: 2,  expected: true},
        {input: 3,  expected: true},
        {input: 5,  expected: true},
        {input: 11, expected: true},
        {input: 15, expected: false},
        {input: 20, expected: false},
        {input: 100, expected: false},
        {input: 45, expected: false},
        {input: 63, expected: false},
        {input: 73, expected: true},
        {input: 19, expected: true},
        {input: 7,  expected: true},
        {input: 5,  expected: true},
        {input: 71, expected: true},
        {input: 17, expected: true},
        {input: 29, expected: true},
        {input: 41, expected: true},
        {input: 97, expected: true},
        {input: 47, expected: true},
        {input: 31, expected: true},
        {input: 11, expected: true},
        {input: 13, expected: true},
        // testing performance and loop iterations skipping with multiples of 5 on a very large number
        {input: 949849845316494994989811984984983, expected: false},
        {input: 949849845316494994989811984984980, expected: false},  
    ];
    jestTheories.default( 'the number {input} is a prime number => {expected}', theories, theory => {
        expect( isPrime( theory.input ) ).toBe( theory.expected );

    });
});

describe( "prime factorization", () => {
    const theories = [
        {input: 'x',  expected: []},
        {input: -3,  expected: []},
        {input: -18,  expected: []},
        {input: 0,  expected: []},
        {input: 1,  expected: []},
        {input: 1.35,  expected: []},
        {input: 25.899,  expected: []},
        {input: 75,  expected: [3,5,5]},
        {input: 36,  expected: [2,2,3,3]},
        {input: 30,  expected: [2,3,5]},
        {input: 73,  expected: [73]},
        {input: 126,  expected: [2,3,3,7]},
        {input: 12,  expected: [2,2,3]},
        {input: 18,  expected: [2,3,3]},
        {input: 24,  expected: [2,2,2,3]},
    ];
    jestTheories.default( 'the prime factorization of {input} is {expected}', theories, theory => {
        expect( getPrimeFactorsList( theory.input ) ).toStrictEqual( theory.expected );
    });
});

describe( "prime factorization unique values", () => {
    const theories = [
        {input: 'x',  expected: []},
        {input: -3,  expected: []},
        {input: -18,  expected: []},
        {input: 0,  expected: []},
        {input: 1,  expected: []},
        {input: 1.35,  expected: []},
        {input: 25.899,  expected: []},
        {input: 75,  expected: [3,5]},
        {input: 36,  expected: [2,3]},
        {input: 30,  expected: [2,3,5]},
        {input: 73,  expected: [73]},
        {input: 126,  expected: [2,3,7]},
        {input: 12,  expected: [2,3]},
        {input: 18,  expected: [2,3]},
        {input: 24,  expected: [2,3]},
    ];
    jestTheories.default( 'the unique prime factors of {input} are {expected}', theories, theory => {
        expect( getUniquePrimeFactorsList( theory.input ) ).toStrictEqual( theory.expected );
    });
});
