const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normal hill', () => {
		it('jump more than k-point', () => {
            const actual = calculateDistancePoints(93, 'normal', 90);
    
            const expected = 66;
    
            assert.equal(actual, expected);
        });
		
		it('jump less than k-point', () => {
            const actual = calculateDistancePoints(93, 'normal', 95);

            const expected = 56;

            assert.equal(actual, expected);
        });
    });

    describe('large hill', () => {
        it('jump less than k-point', () => {
            const actual = calculateDistancePoints(103, 'large', 120);

            const expected = 29.4;

            assert.equal(actual, expected);
        });

        it('jump more than k-point', () => {
            const actual = calculateDistancePoints(122.5, 'large', 120);

            const expected = 64.5;

            assert.equal(actual, expected);
        });

        it('jump exactly k-point', () => {
            const actual = calculateDistancePoints(125, 'large', 125);

            const expected = 60;

            assert.equal(actual, expected);
        });
    });

    describe('flying hill', () => {
        it('jump more than k-point', () => {
            const actual = calculateDistancePoints(215, 'flying', 180);

            const expected = 162;

            assert.equal(actual, expected);
        });

        it('jump less than k-point', () => {
            const actual = calculateDistancePoints(182, 'flying', 190);

            const expected = 110.4;

            assert.equal(actual, expected);
        });

        it('jump exactly than k-point', () => {
            const actual = calculateDistancePoints(185.5, 'flying', 185.5);

            const expected = 120;

            assert.equal(actual, expected);
        });
    });
	describe('wrong hill size', () => {
		it('flyig', () => {
            const actual = calculateDistancePoints(215, 'flyig', 180);

            const expected = 'please insert correct hill size';

            assert.equal(actual, expected);
        });
    });
});