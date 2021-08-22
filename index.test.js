
const {isEven, isPrime, isNaturalNumber} = require( "./index" );
const jestTheories = require( "jest-theories" );
 
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
        {input: -3,  expected: false},
        {input: 0,  expected: false},
        {input: 3,  expected: true},
        {input: 15, expected: false},
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
        {input: 13, expected: true}
    ];
    jestTheories.default( 'the number {input} is a prime number => {expected}', theories, theory => {
        expect( isPrime( theory.input ) ).toBe( theory.expected );

    });
});