# Node.js File System (fs) Module Guide

## Introduction

The **fs** (File System) module in Node.js allows you to work with the file system on your computer. It enables you to read, write, update, delete, and manage files and directories using JavaScript.

## Why Learn the fs Module?

- Automate file operations (reading, writing, updating)
- Build backend services that handle files (e.g., uploading images, saving logs)
- Understand how Node.js interacts with the operating system

## Basic Operations

### 1. Reading a File

```js
const fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 2. Writing to a File

```js
const fs = require('fs');

fs.writeFile('output.txt', 'Hello, students!', (err) => {
  if (err) throw err;
  console.log('File has been written');
});
```

### 3. Appending to a File

```js
const fs = require('fs');

fs.appendFile('output.txt', '\nThis is an appended line.', (err) => {
  if (err) throw err;
  console.log('Content appended');
});
```

### 4. Deleting a File

```js
const fs = require('fs');

fs.unlink('output.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
```

## Practice

- Try reading and writing to `text.txt` using the above examples.
- Experiment with creating and deleting files.

---

## Running task.js inside Lesson1 Folder

To execute the `task.js` file and see its output, open your terminal, navigate to the `Lesson1` folder, and run:

```bash
node task.js
```

This will execute the code in `task.js` and display the output in your terminal.

---

## Summary

The fs module is a core part of Node.js and is essential for backend development. Practice using its methods to become comfortable with file operations.

---

\_Dipen is teaching fs (file system module) in
