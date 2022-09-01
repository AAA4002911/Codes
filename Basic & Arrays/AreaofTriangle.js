let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let Base = parseInt(readLine());
let Height = parseInt(readLine());

Area = ( Base * Height ) / 2;

console.log(Area);