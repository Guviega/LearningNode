# 🚀 Learning Node.js

> A hands-on repository to explore and understand the fundamentals of Node.js through practical examples.

---

## 📌 Overview

This project is a **learning playground for Node.js**, covering core concepts such as:

* Native Node modules (`http`, `fs`, `path`)
* Modularization
* Basic server creation
* Introduction to Express
* Object-oriented patterns in JavaScript

It’s designed to be simple, readable, and easy to experiment with.

---

## 🧠 What You'll Learn

✨ By exploring this repository, you will understand:

* How Node.js works under the hood
* How to create and organize modules
* How to handle files and directories
* How to build a basic HTTP server
* How to structure a small Node.js application
* The basics of using Express

---

## 📂 Project Structure

```
LearningNode/
│
├── index.js              # Main entry point
├── person.js             # Example of a custom class
├── package.json          # Project configuration
│
├── modules/              # Core Node.js examples
│   ├── http.js           # HTTP server example
│   ├── fs.js             # File system operations
│   ├── path.js           # Path utilities
│   └── express.js        # Express server example
│
└── .gitignore
```

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/learning-node.git
cd learning-node
npm install
```

---

## ▶️ Running the Project

### Development mode (with auto-reload using nodemon):

```bash
npm run start:dev
```

### Manual run:

```bash
node index.js
```

---

## 🔍 Key Files Explained

### `index.js`

* Entry point of the application
* Imports modules and runs examples

### `person.js`

* Demonstrates a simple class (`Person`)
* Shows how to export/import modules

### `modules/http.js`

* Creates a basic HTTP server using Node's native module

### `modules/fs.js`

* Demonstrates file system operations (read/write)

### `modules/path.js`

* Shows how to work with file paths

### `modules/express.js`

* Simple Express server setup

---

## 📦 Dependencies

* **express** → Web framework for Node.js
* **nodemon** → Automatically restarts the server during development

---

## 💡 Tips

* Uncomment different `require()` lines in `index.js` to test each module
* Modify the modules to experiment and deepen your understanding
* Try adding new features (routes, file operations, etc.)

---

## 👨‍💻 Author

Gustavo Viega (github.com/Guviega).

---

## ⭐ Contributing

Feel free to fork this project and experiment!
Pull requests are welcome if you'd like to improve it.
