// my fizzBuzz function:
function fizzBuzz(){
  for ( let i = 0; i <= 30; i+= 1) {
    // you can also write the following line this way and it would still produce the same result;
      // if ( i % 15 === 0) console.log("fizzBuzz");
    if (i % 3 === 0 && i % 5 === 0) console.log("fizzBuzz");
    else if (i % 5 === 0) console.log("Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else console.log(i);
  }
}

fizzBuzz();
