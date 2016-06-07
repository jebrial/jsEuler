/*

	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

import { expect } from 'chai'

describe('Problem 5', () => {
	it('should return the smallest number that can be divided by numbers 1 - 10', () => {
		expect(evenlyDivisibleUpTo(10, 10)).to.equal(2520)
	})
	it('should return the smallest number that can be divided by numbers 1 - 20', () => {
		console.time('problem 5')
		expect(evenlyDivisibleUpTo(20, 2520)).to.equal(232792560)
		console.timeEnd('problem 5')
	})
})

function evenlyDivisibleUpTo(count, frm) {
	for (let i = frm; i < Infinity; i++) {
		for (let j = count; j > 0; j--) {
			if (i % j) break;
			if (j === 1) return i;
		}
	}
 	throw new Error('Number not found')
}
