//중복단어제거
const arr = ["good", "time", "good", "time", "student"];

function solution(arr) {
  // 반복문 사용
  // let answer=[]
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!answer.includes(arr[i])) {
  //       answer.push(arr[i]);
  //       console.log(arr[i]);
  //     }
  //   }
  // 2. indexOf와 filter 사용
  let answer = arr.filter((e, i) => arr.indexOf(e) === i);
  answer.map((e) => console.log(e));
}
solution(arr);
