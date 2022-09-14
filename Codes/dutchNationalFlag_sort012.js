/*
Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}

Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
*/

//count variable Method
/*

let arr = [0, 0, 1, 2, 0, 2, 1, 1, 0];
let N = arr.length;

let zeros = 0;
let ones = 0;
let twos = 0;

for (let i = 0; i < N; i++) {
	if (arr[i] == 0) zeros++;
	else if (arr[i] == 1) ones++;
	else twos++;
}
for (let i = 0; i < N; i++) {
	if (zeros > 0) {
		arr[i] = 0;
		zeros--;
	}
	else if (ones > 0) {
		arr[i] = 1;
		ones--;
	}
	else if (twos > 0) {
		arr[i] = 2;
		twos--;
	}
}
console.log(arr)

*/


//Pointers Method
/*
here `0′, `1′ and `2′. The array is divided into four sections: 
arr[1] to arr[low – 1]
arr[low] to arr[mid – 1]
arr[mid] to arr[high – 1]
arr[high] to arr[n]
If the ith element is 0 then swap the element to the low range.
Similarly, if the element is 1 then keep it as it is.
If the element is 2 then swap it with an element in high range.
*/
let a = [0, 0, 1, 2, 0, 2, 1, 1, 0];
let N = a.length;

let lo = 0;
let hi = N - 1;
let mid = 0;
let temp = 0;
// Iterate till all the elements
// are sorted
while (mid <= hi) {
	// If the element is 0
	if (a[mid] == 0) {
		temp = a[lo];
		a[lo] = a[mid];
		a[mid] = temp;
		lo++;
		mid++;
	}
	// If the element is 1
	else if (a[mid] == 1) {
		mid++;
	}
	// If the element is 2
	else {
		temp = a[mid];
		a[mid] = a[hi];
		a[hi] = temp;
		hi--;
	}
}