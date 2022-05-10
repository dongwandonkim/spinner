const spinner = ['|', '/', '-', '\\', '|'];
let timer = 0;
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    i !== spinner.length - 1
      ? process.stdout.write(`\r${spinner[i]}`)
      : process.stdout.write(`\r${spinner[i]}\n`);
  }, timer);

  timer += 200;
}

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   \n');
// }, 900);
