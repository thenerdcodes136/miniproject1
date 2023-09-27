const fs = require('fs');

// 1. Read a file and display its content
const readFileAndDisplay = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    console.log('File content:', data);
  });
};

// Example usage: Read and display the content of 'example.txt'
readFileAndDisplay('example.txt');

// 2. Write content to a file
const writeFile = (filePath, content) => {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }
    console.log('File has been written successfully.');
  });
};

// Example usage: Write 'Hello, Node.js!' to a file called 'output.txt'
writeFile('output.txt', 'Hello, Node.js!');

// 3. Delete a file
const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting the file:', err);
      return;
    }
    console.log('File has been deleted successfully.');
  });
};

// Example usage: Delete a file called 'toBeDeleted.txt'
deleteFile('toBeDeleted.txt');