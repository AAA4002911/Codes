/*

Code Words
Description

International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

Return the number of different transformations among all words we have.
Input format

First line contains a positive integer n, denoting the number of test cases. It is followed by n lines. Each of the n lines contains space separated words.
Output format

n lines containing the number of different transformations among all words we have.
Sample input

1
gin zen gig msg

Sample output

2

Explanation

The transformation of each word is:

"gin" -> "--...-."

"zen" -> "--...-."

"gig" -> "--...--."

"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
Note

The length of words will be at most 100000

Each words[i] will have length in range [1, 12].

words[i] will only consist of lowercase letters.
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

const KEY = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

function morse_code(line) {
    let arr = line.split(" ");
    let hashmap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
        let morse_string = '';

        //converting each word to morse code using KEY
        for (let j = 0; j < str.length; j++) {
            let char_code = str.charCodeAt(j)
            morse_string += KEY[char_code - 97];                    
        }
        
        if (!hashmap.has(morse_string)) {
            hashmap.set(morse_string, 0);
        }
        else {
            let value = hashmap.get(morse_string);
            value++;
            hashmap.set(morse_string, value);
        }
    }
    return hashmap.size;
}

let testcase = parseInt(readLine());
while (testcase--) {
    let input_line = readLine();
    console.log(morse_code(input_line));
}