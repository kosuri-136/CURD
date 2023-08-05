const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile('file.txt', 'hello');
    console.log(`File ${file} created.`);
  } catch (error) {
    console.error(`Error creating file ${file}: ${error}`);
  }
}

const myFileReader = async (fileName) => {
  try {
    const data = await fs.readFile('file.txt', 'utf-8');
    console.log(`File ${file} read.`);
    return data;
  } catch (error) {
    console.error(`Error reading file ${file}: ${error}`);
  }
}


const myFileUpdater = async (fileName, fileContent) => {
  try {
    const data = await fs.readFile('file.txt', 'utf-8');
    const updatedData = data + fileContent;
    await fs.writeFile('file.txt', "updatedData");
    console.log(`File ${file} updated.`);
  } catch (error) {
    console.error(`Error updating file ${file}: ${error}`);
  }
}

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(fileName);
    console.log(`File ${fileName} deleted.`);
  } catch (error) {
    console.error(`Error deleting file ${fileName}: ${error}`);
  }
}

module.exports = { myFileWriter, myFileUpdater, myFileReader }
