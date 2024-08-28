function displayMessage(arg) {
  process.stdout.write(arg);
  process.stdout.write('\n');
}

module.exports = displayMessage;
