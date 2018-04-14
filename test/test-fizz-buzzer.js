const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    it('should return \'fizz\' if divisible by only 3', function() {
        const divisBy3Cases = [3, 6, 9, 12];

        divisBy3Cases.forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });

    });

    it('should return \'buzz\' if divisible by only 5', function() {
        const divisBy5Cases = [5, 10, 25, 55];

        divisBy5Cases.forEach(input => {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });

    it('should return \'fizz-buzz\' if divisible by 3 and 5', function() {
        const divisBy3And5Cases = [15, 30, 45, 60];

        divisBy3And5Cases.forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });

    it('should return number if not divisible by 3 or 5', function() {
        const notDivisibleCases = [2, 4, 7, 11];

        notDivisibleCases.forEach(input => {
            expect(fizzBuzzer(input)).to.equal(input);
        });
    })

    it('should raise an error if arg is not a number', function() {
        const badInputs = ['a', true, '13', false];

        badInputs.forEach(input => {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});