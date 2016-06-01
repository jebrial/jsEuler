
/*

	The prime factors of 13195 are 5, 7, 13 and 29.

	What is the largest prime factor of the number 600851475143 ?

*/

import {expect} from 'chai';

describe('Problem 3', () => {

	it('Finds the largest prime factor of 13195', () => {
		expect(findLargestPrime(13195)).to.equal(29);
	});
	it('Finds the largest prime factor of 600851475143', () => {
		console.time('problem 3')
		expect(findLargestPrime(600851475143)).to.equal(6857);
		console.timeEnd('problem 3')
	});
});

function findLargestPrime(numb) {
	for(let i = 2; i < numb/2; i += 2) {
		if(!(numb % i)) return findLargestPrime(numb/i)
		if(i === 2) i = 1
	}
	return numb
}
