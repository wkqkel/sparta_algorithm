//이분검색
//내풀이
// function solution(n, arr) {
//   let answer;
//   arr.sort((a, b) => a - b);
//   answer = arr.indexOf(n) + 1;
//   return answer;
// }

//강의영상
// 시간복잡도 logN
// 정렬해놓고 순차탐색하면 o(N)임.
// 근데 이분검색하면 o(logN) //밑이 2
// 우선 오름차순으로 정렬하고
// 이분검색은 lt,rt 두개의 포인트 변수필요_인덱스를 가리킴
// mid=Math.floor(lt+rt/2)
// 미드가 타겟인지 보고 맞으면 찾았고 아니면
// else if로 작으면 왼쪽에 타겟이 있으니 rt를 mid-1로 크면 rt=mid+1로
// 그럼 한번 비교때 마다 검색범위가 절반으로 줄어듬.

function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0,
    rt = arr.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
