const solution = (arr) => {
  const isPrime = (n) => {
    // 1은 소수가 아님
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  let answer = "";
  for (let x of arr) {
    // const reverse = +x.toString().split("").reverse().join("");
    let reverse = 0;
    // 나머지연산자를 이용해서 주어진 숫자를 뒤집는법
    while (x) {
      let t = x % 10;
      reverse = reverse * 10 + t;
      x = parseInt(x / 10);
    }

    if (isPrime(reverse)) {
      answer += reverse + "\n";
    }
  }
  return answer.trim();
};

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
