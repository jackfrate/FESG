const second = 1000;

function sleep() {
  return new Promise(resolve => setTimeout(resolve, second));
}

// print 1 after 1 second
async function print1() {
  await sleep();
  console.log("1");
}

function print2() {
  console.log("2");
}


/**
 * ! while the functions above are correct, focus on the main function for the main idea
 */

async function main() {
  await print1();
  print2();
}

main();
