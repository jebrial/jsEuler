/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
import {expect} from 'chai';

describe('Problem 1', () => {
	it('Find the sum of all the multiples of 3 or 5 below 10.', () => {
		expect(sumOf3and5Multiples(10)).to.equal(23);
	});
	it('Find the sum of all the multiples of 3 or 5 below 1000.', () => {
		console.time('problem1')
	  	expect(sumOf3and5Multiples(1000)).to.equal(233168);
		console.timeEnd('problem1')
	});
});

function sumOf3and5Multiples(threshold) {
	let sum = 0
	for (let i = 1; i < threshold; i++) {
		if(!(i % 3) || !(i%5) ) {
			sum += i
		}
	}
	return sum
}
