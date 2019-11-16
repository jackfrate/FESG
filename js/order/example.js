const second = 1000;

// print 1 after 1 second
function print1() {
  setTimeout(() => { console.log('1') }, second);
}

function print2() {
  console.log("2");
}

// whats gonna happen when we run this?
function main() {
  print1();
  print2();
}

main();
