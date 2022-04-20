// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)

// 내 풀이
// const solution = (a, b) => {
//   const checkAnagram = (sH, str) => {
//     for (let x of str) {
//       if (!sH.has(x) || sH.get(x) === 0) return false;
//       sH.set(x, sH.get(x) - 1);
//     }
//     return true;
//   };

//   const sH = new Map();
//   let ans = 0;
//   for (let x of b) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   let sum = a[0] + a[1] + a[2];
//   for (let i = b.length; i <= a.length; i++) {
//     const copySH = new Map(sH);
//     if (checkAnagram(copySH, sum)) {
//       ans++;
//     }
//     sum += a[i];
//     sum = sum.slice(1);
//   }
//   return ans;
// };

// 영상 풀이1
//(투포인터,슬라이딩윈도우해서 for문 한번으로 끝) 이랬는데 o(n*m)임
// function compareMaps(map1, map2) {
//   if (map1.size !== map2.size) return false;
//   for (let [key, val] of map1) {
//     if (!map2.has(key) || map2.get(key) !== val) return false;
//   }
//   return true;
// }

// const solution = (s, t) => {
//   let answer = 0;
//   let tH = new Map();
//   let sH = new Map();
//   for (let x of t) {
//     if (tH.has(x)) tH.set(x, tH.get(x) + 1);
//     else tH.set(x, 1);
//   }
//   let len = t.length - 1;
//   // t의 길이-1 까지로 구성된 맵인 슬라이딩윈도우 생성
//   for (let i = 0; i < len; i++) {
//     if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
//     else sH.set(s[i], 1);
//   }
//   let lt = 0;
//   for (let rt = len; rt < s.length; rt++, lt++) {
//     // 맵에 rt를 더해줌
//     if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
//     else sH.set(s[rt], 1);
//     // 더한것과 맵끼리 비교해서 true면 ++해줌
//     if (compareMaps(sH, tH)) answer++;
//     // lt가 가리키는 거 빼고 0이면 삭제_ 추가했던거기때문에 당연히 있음
//     sH.set(s[lt], sH.get(s[lt]) - 1);
//     if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
//   }
//   return answer;
// };

// let a = "bacaAacba";
// let b = "abc";
// console.log(solution(a, b));

//풀이2
// O(n)으로 짠 코드 _ 영상커뮤니티에서 발견
function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  // sH에 -1씩 추가해서 셋팅
  for (let x of t) {
    sH.set(x, (sH.get(x) || 0) - 1);
  }

  let len = t.length - 1;

  // t돌면서 슬라이딩윈도우 sH에 있으면 +1해서 0으로 하고 삭제, 없으면 +1로 추가
  for (let i = 0; i < len; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1);
    if (sH.get(s[i]) === 0) sH.delete(s[i]);
  }

  // 투포인트 돌면서
  // 기존 t껀 -였고 rt로 추가된건 + 되고 lt는 또 -해주면서 사이즈가 0이면 ans++
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    // s[rt]를 존재하든 아니든 +1하고 0이 되면 삭제
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
    if (sH.get(s[rt]) === 0) sH.delete(s[rt]);
    // 사이즈 0이면 ans++
    if (sH.size === 0) answer++;
    // lt를 -1해줌
    sH.set(s[lt], (sH.get(s[lt]) || 0) - 1);

    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
console.log(solution("bacacbcba", "cbc"));
