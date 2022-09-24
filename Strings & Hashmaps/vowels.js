/*
Vowels
Why are Vowels important? Vowels are found in every syllable of every word. They enable us to distinguish between words such as pant, pint, pent, punt or slip, slap, slop. If a child doesn't understand vowel sounds, they will struggle with reading.

Vowels are very essential characters to form any meaningful word in English dictionary. There are 5 vowels in English language - a, e, i, o u. You are given a randoms string containing only lowercase letters and you need to find if the string contains ALL the vowels.

Input Format:
FIrst line contains N , the size of the string. Second line contains the letters (only lowercase).

Output Format:
Print YES (without the quotes) if all vowels are found in the string, NO (without the quotes) otherwise.

Constraints:
The size of the string will not be greater than 10,000.
Sample Input:
8
atuongih
Sample Output:
NO
*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let vowels = ['a', 'e', 'i', 'o', 'u'];
let n = parseInt(readLine());
let letters = readLine();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < 5; j++) {
    if (letters[i] == vowels[j]) vowels[j] = 0;
  }
}

let flag = 0;
for (let j = 0; j < 5; j++) {
  if (vowels[j] != 0) flag = 1;
}  
if (flag == 1) console.log("NO");
else console.log("YES");