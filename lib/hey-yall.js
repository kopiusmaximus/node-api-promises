'use strict';

const fs = require('fs');

const stdout = '/dev/stdout';

let inFile = process.argv[2];
let outFile = process.argv[3] ? process.argv[3] : stdout;

const readFile = (filename, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (error, contents) => {
      if (error) {
        reject(error);
      } else {
        resolve(contents);
      }
    });
  });
};

const writeFile = (filename, contents, options) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, contents, options, error => {
      if (error) {
        reject(error);
      }
    });
  });
};

const splitContentsIntoLines = (content) => {
  let lines = content.split('\n');
  lines.pop();
  console.log(lines);
  return lines;
};

const greetifyLines = (lines) => {
  contents = '';
  lines.forEach(line => {
    contents += /* TODO greetify line */ line;
  });
};


  let greetifiedLines = lines.map(line => line = 'Hello, ' + line + '!\n');
  console.log(greetifiedLines);
  return greetifiedLines;
};

const joinLines = (lines) => {
  lines.join('\n');
  console.log('joined lines is', lines);
  return lines;
};

readFile(inFile, { encoding: 'utf8' })
.then(contents => splitContentsIntoLines(contents))
.then(lines => greetifyLines(lines))
.then(greetifiedLines => joinLines(greetifiedLines))
.then(contents => writeFile(outFile, contents))
.catch(console.error)
;
