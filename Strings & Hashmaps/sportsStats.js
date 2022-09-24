/*

Sports Stats

Max likes football very much. In order to check the popuplarity of the game, he decided to talk to random people and ask them about their favourite game and note it down in a list.

Given a list of name of people and their favourite sport, help Max in finding the sport liked by most of the people, and also how many people like football.

He could have met same people more than once, he will only count response of his first meet with any person.

Note : Name of person as well as sport is a single string in lowercase. Length of name of people as well as sport is less than 11.
Input

First line will contain no of entries in the list. i.e. N Next N lines will contain two strings, person's name and sports he like.
Output

In first line, name of sport liked by most no of people (In case of more than one games is liked by highest no of people, output the first one in lexicographical order). In second line, no of people having football as their favourite game.
Example

Input:

7

abir cricket

aayush cricket

newton kabaddi

abhinash badminton

sanjay tennis

abhinash badminton

govind football

Output:

cricket

1
Explanation

2 people likes cricket, ans so it liked by maximum people. 1 person has football as his favourite sport

*/

let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


class Survey {
    constructor() {
        this.list = new Map();
        this.football = 0;
    }
    _set(name, sport) {
        if (!this.list.has(name)) {
            this.list.set(name, sport);
        }
    }
    _favSport() {
        let fav = new Map();
        for (let sport of this.list.values()) {
            if(!fav.has(sport)) {
                fav.set(sport, 1);
            }
            else {
                let value = fav.get(sport);
                value++;
                fav.set(sport, value);
            }
        }
        //finding the max value
        let max = 0;
        let max_arr = [];
        for (let value of fav.values()) {
            if (value > max) max = value;
        }
        for (let [sport, value] of fav.entries()) {
            if (value == max) max_arr.push(sport);
            if (sport === 'football') this.football = value;
        }
        max_arr.sort();
        console.log(max_arr[0]); 
    }
    _footballCount() {
        console.log(this.football);
    }
}

let n = parseInt(readLine());
let MAX = new Survey();
for (let i = 0; i < n; i++) {
    let input = readLine().split(" ");
    let name = input[0];
    let sports = input[1];
    MAX._set(name, sports);
}

MAX._favSport();
MAX._footballCount();