// forEach , map , filter, reduce

// 1. forEach는 반복문 돌려줌
// function forEach(predicate, thisArg) {
//   for (let i = 0; i < arguments.length; i++) {
//     predicate(a[i], i);
//   }
// }

// a=[10,11,12,13,14,15]
// a.forEach(
//   function (v, i) {
//     console.log(v, i, this);
//   },
//   [1, 2]
// );

// 2. map는 요소 하나하나를 이용해 새로운 배열을 리턴_ 원본배열과 길이가 같음 주의
// function map(predicate, thisArg) {
// let list=[]
//   for (let i = 0; i < a.length; i++) {
//     list.push(predicate(a[i],i))
//   }
// return list
// }

// a = [10, 11, 12, 13, 14, 15];
// let answer = a.map(
//   function (v, i) {
//     // return v * v;
//     if (v % 2 === 0) return v;
//     // 이렇게 하면 짝수만 3개담긴 배열이 생성될 것같지만
//     // 맵은 위에보면 for을 원본배열의 랭쓰만큼 돌리므로, 원본배열과 무조건 길이가 같고, undefined 값이 푸쉬될것
//   },
//   [1, 2]
// );
// console.log(answer);

// 3 필터는 map처럼 새로운 배열을 생성해서 생성하는데 원하는 원소만 리턴해줌
// 콜백함수가 참을 리턴한 요소만 새로운 배열의 원소로 생성
// function filter(predicate, thisArg) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     if (predicate(a[i], i)) list.push(a[i]);
//   }
//   return list;
// }

// a = [10, 11, 12, 13, 14, 15];
// answer = a.filter(
//   function (v, i) {
//     return v % 2 == 0;
//   },
//   [1, 2]
// );
// console.log(answer);

// 4.reduce 어떤 값을 리턴
//predicate는 콜백 함수를 받음
function reduce(predicate, val) {
  // 1. 0의 함수 통째로 predicate로 , val 은 초기값을 인자로 받아옴
  let result = val;
  for (let i = 0; i < a.length; i++) {
    result = predicate(result, a[i]); // 2. predicate 함수를 불러오고, 0의 acc,v로 들어감
  }
  return result; // 리듀스 함수의 리턴값
}
a = [10, 11, 12, 13, 14, 15];
answer = a.reduce(function (acc, v) {
  // 0. 리듀스라는 함수 실행_ 함수 통째로 리듀스 함수의 첫번째 인자인 predicate로 들어감
  return acc + v;
}, 0);
console.log(answer);
