solution = (s) => {
  let count = 0;
  for (let x of s) {
    // if (x === x.toUpperCase()) {

    let num = x.charCodeAt(); //x라는 코드의 아스키 코드를 넘겨줌
    if (num >= 65 && 90 >= num) {
      count++;
    }
    //아스키코드 외워두기
    // 대문자 A부터 Z 65~90개 25+1개
    // 소문자는 97~122
  }

  return count;
};

console.log(solution("KoreaTimeGood"));
