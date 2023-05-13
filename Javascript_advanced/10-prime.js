function countPrimeNumbers() {
    function isPrime(n) {
      for (let i = 2; i < n; i++) {
        if (n % i === 0)
          return 0;
      }
      return 1;
    }
    function loop() {
      let count = 0;
      for (let i = 2; i < 100; i++) {
        if (isPrime(i) === 1)
          count++;
      }
    }
    loop();
  }
  
  let start = performance.now();
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
  let end = performance.now();
  console.log(`Execution time of calculating prime numbers 100 time was ${end - start} milliseconds.`);