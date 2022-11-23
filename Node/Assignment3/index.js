const fs = require("node:fs/promises");
const http = require("node:http");
const readline = require("node:readline");

async function html_generator(content) {
    await fs.writeFile("index.html", content);
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/html",
    });
    (async function () {
        const data = await fs.readFile("index.html");
        res.end(data);
    }());
}
)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("What is your name: ", (answer) => {
    const content = `<h1> Hello World </h1>
<p> This is ${answer}... </p>`
    html_generator(content);
    server.listen(3000, () => console.log('The Server Is Runing........'));
})