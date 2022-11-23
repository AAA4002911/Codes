const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont change function name
	await fs.writeFile(fileName, fileContent);
}

const myFileReader = async (fileName) => {
	// write code here
	// dont change function name
	const FILE = await fs.readFile(fileName, {encoding: "utf-8"});
	console.log(FILE);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont change function name
	await fs.appendFile(fileName, fileContent);
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont change function name
	await fs.unlink(fileName);
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }