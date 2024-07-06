const fs = require('fs');

// Content to write to the file
const content = 'Hello Node\n';

// File path
const filePath = 'welcome.txt';

// Write to the file
fs.writeFile(filePath, content, (err) => {
  if (err) throw err;
  console.log(`File '${filePath}' has been created with content: '${content.trim()}'`);
});

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(`Contents of '${filePath}':`);
  console.log(data);
});