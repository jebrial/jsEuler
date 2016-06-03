/*

	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

	Find the largest palindrome made from the product of two 3-digit numbers.

*/

import {expect} from 'chai'

describe('Problem 4', () => {
	it('should be the largest palindrome from the product of two 2-digit numbers', () => {
		expect(largestPalindromeProduct(99)).to.equal(9009)
	})
	it('should be the largest palindrome from the product of two 3-digit numbers', () => {
		console.time('problem 4')
		expect(largestPalindromeProduct(999)).to.equal(906609)
		console.timeEnd('problem 4')
	})
})


function largestPalindromeProduct(num) {
	let result = 0;
	// let resultThreshold = 3;
	// let resultCount = 0
	/*
		As the threshold increases so does the length of time to complete
		Addind  num - (num/10) helps to cut down on iterations and removes
		the need for a threshold in this implementation. I left the threshold in
		to show the diff without committing. Time difference without either check is around 272ms on average
		and this brought it down to around 3ms.
	*/
	for (let i = num; i > num - (num/10); i--) {
		for (let j = num; j > (i - 10); j--) {
			let testNumb = i * j
			if (isPalindrome(testNumb) && testNumb > result) {
				// resultCount++
				// console.log(i , " ", j, " ", testNumb)
				result = testNumb
			}
		}
		// if(result && resultCount == resultThreshold) return result;
	}
	return result
}

function isPalindrome(num){
  return (+num.toString().split('').reverse().join('')) === num
}
