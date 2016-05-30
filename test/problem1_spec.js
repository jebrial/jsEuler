/*

	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

	Find the sum of all the multiples of 3 or 5 below 1000.

*/
import {expect} from 'chai';

describe('Problem 1', () => {
	it('Find the sum of all the multiples of 3 or 5 below 10.', () => {
		expect(sumOfMultiples([3,5],10)).to.equal(23);
	});
	it('Find the sum of all the multiples of 3 or 5 below 1000.', () => {
		console.time('problem 1')
	  	expect(sumOfMultiples([3,5],1000)).to.equal(233168);
		console.timeEnd('problem 1')
	});
});

function sumOfMultiples(multiplesArr, threshold) {
	let sum = 0
	let productOfm = 1
	let exclusions = 0

	multiplesArr.map((n) => productOfm *= n)

	for (let i = productOfm; i < threshold; i += productOfm) {
			exclusions += i
	}

	multiplesArr.map((n) => {
		for (let i = n; i < threshold; i += n) {
				sum += i
		}
	})

	return sum - exclusions
}
