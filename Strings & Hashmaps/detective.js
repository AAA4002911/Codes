/*

Detective
Description

Prasun, a wanna be detective, has been assigned a case after his continuous failure at solving any. This is the murder of Snehashis who was killed last night. Prasun has already made some guesses on who could be the murderer and it seems that the two murderers are communicating via some strange arrangement of words. As prasun has been involved at solving cases of such fashion, he is making some guesses on what the message could probably be. Though he is pretty smart (:P), you have to help him by checking whether his guess is actually a possible one from the messages received.

Basically you need to check whether you can get the guessed message using the characters of the recieved message!!!!!!!!!!!

Note : Strings are case insensitive.
Input

First line contains T which is the number of test cases.

For each test case first line is Message Received.

For each test case second line is Message Guessed.
Output

For each input, output YES if the guess is correct else print NO.
Example

Input:

1

jogod #! siara.

raja is good!

Output:

YES

*/

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function guess_checker(str1, str2) {
    let map = new Map();
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == " ") continue;
        if (!map.has(str1[i])) map.set(str1[i], 1);
        else map.set(str1[i], map.get(str1[i]) + 1);
    }
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] == " ") continue;
        if (!map.has(str2[i])) return 'NO';
        else {
            if (map.get(str2[i]) == 0) return 'NO';
            map.set(str2[i], map.get(str2[i]) - 1);
        }
    }
    return 'YES';
}

let testcases = parseInt(readLine());

while (testcases--) {
    let message_recieved = readLine();
    let message_guessed = readLine();
     console.log(guess_checker(message_recieved, message_guessed));
}