// 뮤직비디오(결정알고리즘)

// 이분검색가지고 답을 정하고, 그 답이 좋은지 계속 좋은 지 판단

// 강의풀이
// 최소 dvd용량은 가장 큰 노래 한곡을 저장할 수 있는 용량 = lt
// 최대 모든 값을 더한 값 = rt
// mid = Math.floor(t+rt/2); 해서 담을 수 있는지 체크
// 처음에 27하면 2장이면 담음 => 꽉꽉채워서 2장이니 널널하게 담으면 3장되니 가능(즉 M이하면 다 가능)
// answer = 27 해놓고 최소용량을 찾으니 rt를 mid-1인 26으로
// 게속해서 mid=17하니까 돼서 mid=12 하니까 총 5장이 되니까 12는 안되고 13으로 바뀌고 계속 반복하며 체크.

function count(songs, capacity) {
  // 이 답이 되나 확인하는 함수가 제일 중요
  // 처음에 용량이 capacity인 dvd 한장으로 시작
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    // capacity는 미드값 sum+x가 미드값보다 크면 저장못함
    // dvd갯수 한장 늘려주고
    if (sum + x > capacity) {
      cnt++;
      sum = x; // 안될때 x값을 sum에 넣어줘야 다음꺼를 더해서 판단
    } else sum += x; // 저장할 수 있으면 누적
  }
  return cnt;
}
function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs); // 주어진 배열 정렬하면 안됨.
  let rt = songs.reduce((a, b) => a + b, 0); // 0으로 초기화한 값에 누적
  // 이분검색 방법 그냥외우셈
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    // mid값을 dvd용량으로 했을 때 몇장이 필요한가를 count함수가 구해줌
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
