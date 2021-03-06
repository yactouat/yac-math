
const {
    checkIsMultiple, 
    isEven, 
    isPrime, 
    isNaturalNumber, 
    getPrimeFactorsList, 
    getUniquePrimeFactorsList,
    getPercentageRepresentation,
    getUnitRatioOfNb1ToNb2
} = require( "./index" );
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

describe( "value of what percentage of nb2 represents nb1", () => {
    
    const theories = [
        {input: ['x', 2],  expected: NaN},
        {input: [-1, 2],  expected: -50},
        {input: [9, -18],  expected: -50},
        {input: [1, 1.35],  expected: 74.07},
        {input: [25.899, 5],  expected: 517.98},
        {input: [75, 100],  expected: 75},
        {input: [6, 36],  expected: 16.67},
        {input: [5, 30],  expected: 16.67},
        {input: [3, 73],  expected: 4.11},
        {input: [12, 126],  expected: 9.52},
        {input: [3, 12],  expected: 25},
        {input: [2, 18],  expected: 11.11},
        {input: [24, 12],  expected: 200},
    ];
    jestTheories.default( '{input} ratio is {expected}', theories, theory => {
        expect( getPercentageRepresentation( theory.input[0], theory.input[1] ) ).toStrictEqual( theory.expected );
    });

    test("cant get a percentage out of 0", () => {
        const getPercentageOutOfZero = () => {
            getPercentageRepresentation(5, 0);
        };
        expect(getPercentageOutOfZero).toThrowError("Division by zero impossible !");
    });

    test("cant pass an expression as nb2", () => {
        expect(getPercentageRepresentation(50, (10 * 10))).toBe(50);
        expect(getPercentageRepresentation(99, (500 + 51))).toBe(17.97);
    });

});

describe( "ratio of 1 nb1 unit to n units of nb2", () => {
    
    describe("ratio when nb1 is bigger than nb2", () => {
        const theories = [
            {input: [3, 2],  expected: "1:0.67"},
            {input: [24, 4],  expected: "1:0.17"},
            {input: [24, 3],  expected: "1:0.13"},
        ];
        jestTheories.default( "ratio between {input} is {expected} for 1 unit of nb1", theories, theory => {
            expect( getUnitRatioOfNb1ToNb2( theory.input[0], theory.input[1] ) ).toEqual( theory.expected );
        });
    }); 

    describe("ratio when nb1 is smaller than nb2", () => {
        const theories = [
            {input: [3, 24],  expected: "1:8.00"},
            {input: [2, 3],  expected: "1:1.50"},
            {input: [4, 24],  expected: "1:6.00"},
        ];
        jestTheories.default( "ratio between {input} is {expected} for 1 unit of nb1", theories, theory => {
            expect( getUnitRatioOfNb1ToNb2( theory.input[0], theory.input[1] ) ).toEqual( theory.expected );
        });
    }); 
    describe("ratio when nb1 is smaller than 1", () => {
        const theories = [
            {input: [0.3, 24],  expected: "1:80.00"},
            {input: [0.2, 3],  expected: "1:15.00"},
            {input: [0.44, 24],  expected: "1:54.55"},
        ];
        jestTheories.default( "ratio between {input} is {expected} for 1 unit of nb1", theories, theory => {
            expect( getUnitRatioOfNb1ToNb2( theory.input[0], theory.input[1] ) ).toEqual( theory.expected );
        });
    }); 

    test("ratio when nb1 is equal to nb2", () => {
        expect( getUnitRatioOfNb1ToNb2( 2, 2 ) ).toEqual( "1:1.00" );
    }); 

    test("ratio when nb1 is 0", () => {
        const getRatioWhenNb1Is0 = () => {
            getUnitRatioOfNb1ToNb2(0, 5);
        };
        expect(getRatioWhenNb1Is0).toThrowError("No ratio possible when left hand value is zero");
    }); 

    test("ratio when nb2 is not a number", () => {
        const getRatioWhenNb2IsNan = () => {
            getUnitRatioOfNb1ToNb2(5, 'x');
        };
        expect(getRatioWhenNb2IsNan).toThrowError("A ratio can only work with numbers");
    }); 


    test("return value is a string formatted in terms of '1:n'", () => {
        // arrange
        const expected = "1:2.00";
        // act
        const actual = getUnitRatioOfNb1ToNb2(2,4);
        // assert
        expect(actual).toEqual(expected);
    }); 

    describe("return value right hand has no more than 2 decimals by default", () => {
        const theories = [
            {input: [2, 4],  expected: 2},
            {input: [0.44, 24],  expected: 2},
        ];
        jestTheories.default( "ratio number of decimals between {input} is {expected} for 1 unit of nb1 is expected to be 2", theories, theory => {
            expect( getUnitRatioOfNb1ToNb2( theory.input[0], theory.input[1] ).split('.')[1].length )
                .toEqual( theory.expected );
        });
    }); 

    test("ratio when nb2 is 0", () => {
         // arrange
         const expected = "1:0.00";
         // act
         const actual = getUnitRatioOfNb1ToNb2(2,0);
         // assert
         expect(actual).toEqual(expected);
    }); 

    test("ratio when nb2 is a negative number and nb1 is positive", () => {
         // arrange
         const expected = "1:-1.00";
         // act
         const actual = getUnitRatioOfNb1ToNb2(2,-2);
         // assert
         expect(actual).toEqual(expected);
    }); 

    test("ratio when nb1 is a negative number and nb2 is positive", () => {
         // arrange
         const expected = "1:-1.00";
         // act
         const actual = getUnitRatioOfNb1ToNb2(-2,2);
         // assert
         expect(actual).toEqual(expected);
    }); 

    test("ratio when both numbers are negative and nb1 is smaller", () => {
         // arrange
         const expected = "1:2.00";
         // act
         const actual = getUnitRatioOfNb1ToNb2(-2,-4);
         // assert
         expect(actual).toEqual(expected);
    });

    test("ratio when both numbers are negative and nb1 is bigger", () => {
        // arrange
        const expected = "1:1.50";
        // act
        const actual = getUnitRatioOfNb1ToNb2(-4,-6);
        // assert
        expect(actual).toEqual(expected);
   });

   test("ratio when both numbers are negative and equal to each other", () => {
        // arrange
        const expected = "1:1.00";
        // act
        const actual = getUnitRatioOfNb1ToNb2(-4,-4);
        // assert
        expect(actual).toEqual(expected);
    });

});


