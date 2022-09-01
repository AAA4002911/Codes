let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let input = parseInt(readLine());
if( input === 0 )
{
    console.log("Given Input is Zero");
}
else
{
    console.log("Given Input is not Zero");

}