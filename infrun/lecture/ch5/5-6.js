// 학급회장 Hash Map

//해쉬개념
// 임의의 크기를 가진 데이터(Key)를 고정된 크기의 데이터(Value)로 변화시켜 저장하는 것
// 키에 대한 해시값을 사용하여 값을 저장하고 키-값 쌍의 갯수에 따라 동적으로 크기가 증가하는 associate array 이다
// 키에 대한 해시값을 구하는 과정을 hashing(해싱)이라고 하며 이때 사용하는 함수(알고리즘)를 해시함수 라고 한다
// 해시값 자체를 index로 사용하기 때문에 평군 시간복잡도가 O(1) 로 매우 빠르다

// 내풀이
// const solution = (s) => {
//   const arr = { A: 0, B: 0, C: 0, D: 0, E: 0 };
//   for (let i = 0; i < s.length; i++) {
//     let arrIdx = s[i];
//     arr[arrIdx]++;
//   }

//   const keyArr = Object.keys(arr);
//   let ans,
//     max = 0;

//   for (let i = 0; i < keyArr.length; i++) {
//     let arrIdx = keyArr[i];
//     if (arr[arrIdx] > max) {
//       max = arr[arrIdx];
//       ans = arrIdx;
//     }
//   }
//   return ans;
// };

// Hash Map
// 자바스크립트에서 key와 value로 이루어진 map이라는 객체가 있는데 그걸 사용
//ECMAScript 6에서 값들을 매핑하기 위한 새로운 데이터 구조를 소개 하고 있다.  그중 하나인 Map객체는 간단한 키와 값을 서로 연결(매핑)시켜 저장하며 저장된 순서대로 각 요소들을 반복적으로 접근할 수 있도록 한다.
// 실행 시까지 키를 알수 없고, 모든 키가 동일한 type이며 모든 값들이 동일한 type일 경우에는 objects를  대신해서 map을 사용해라.  _ mdn참고

// 강의 조금 듣다 풀이
// const solution = (s) => {
//   let sH = new Map();
//   // set 메써드 => sH.set("B",1) 하면 B:1 이 저장
//   // get 메써드 => 해당 키의 값을 가져옴.
//   // has 메써드 => 해당 키가 존재하는지 여부를 반환
//   for (let i = 0; i < s.length; i++) {
//     if (sH.has(s[i])) {
//       sH.set(s[i], sH.get(s[i]) + 1);
//     } else {
//       sH.set(s[i], 1);
//     }
//   }
//   let max = Math.max(...sH.values());
//   let ans;
//   sH.forEach((value, key) => (value === max ? (ans = key) : null));
//   return ans;
// };

// 강의풀이
const solution = (s) => {
  let answer;
  let sH = new Map(); // sH는 string Hash
  // set 메써드 => sH.set("B",1) 하면 B:1 이 저장
  // get 메써드 => 해당 키의 값을 가져옴.
  // has 메써드 => 해당 키가 존재하는지 여부를 반환
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
};

let str = "BACBACCACCBDEDE";
console.log(solution(str));
