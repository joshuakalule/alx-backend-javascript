# Node JS Basics for Backend

Node.js is an open-source and cross-platform JavaScript runtime environment.
It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of
the browser. This allows Node.js to be very performant.\
[Read more](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

## Process

The `process` object is a global object and can be accessed from anywhere.\
[Read more](https://node.readthedocs.io/en/latest/api/process/)

### Attributes accessible through `process`

* `process.argv`: an array containing the command line arguments.\
  The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

* `process.env`: An object containing the user environment

* `process.exit([code])`: Ends the `process` with the specified `code`.
  If omitted, exit uses the 'success' code 0

## Child process

The `node:child_process` module provides the ability to spawn subprocesses either asynchronously (default) or synchronously.

### Child process methods

* `child_process.spawn()`: spawns the child process asynchronously.
* `child_process.exec()`: spawns a shell and runs a command within that shell,
  passing the `stdout` and `stderr` to a callback function when complete.
* `child_process.fork()`: special case of `spawn()` ideal for creating multiple
  Node.js processes that can communicate with each other.
* `child_process.execFile()`: similar to `exec()` except that it spawns the
  command directly without first spawning a shell by default.

**Note:** the above methods each have their synchronous counterparts e.g
`spawnSync()` for `spawn()`

## Express JS

Express.js is a popular web application framework for Node.js that can be used
to build APIs.

## Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
[DOCS](https://mochajs.org/)

## Nodemon

nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
[DOCS](https://github.com/remy/nodemon#nodemon)
