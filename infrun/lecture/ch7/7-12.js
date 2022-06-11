// 마구간 정하기(이분검색을 통한 결정알고리즘)

//영상풀이
// 입력 꼭 sort
// 가장 가까운 말의 거리가 최대한 떨어지도록 하는 거리
// mid를 두말이 떨어진 최소거리로 잡을때
// 두 말 사이의 거리는 가장 작은 lt=1(첫좌표X), rt는 제일긴좌표인 9
// 그러고 두개 더해서 이분검색함 두개 더한값이 가장 가까운 말의 최대거리값이 되느냐

// 처음에 mid=5인데,
// 첫번째말은 무조건 첫좌표, 바로 전 말이 들어간 좌표를 ep로 하고
// 2-1하면 1인데 mid인 5보다 크거나 같아야하니 안됨 그럼 8번좌표에 2번째 말넣고 ep는 8이 되는데 다음 9는 말사이거리가 1밖에 안됨 리턴 2하면 답이 안됨! 5로 안되니 6,7,8안되고 rt=4로해야함
// 다음 mid=2가 되고 2는 안되고 4는 되고,8 되고, ep는 안됨 리턴3 // 이제 2는 되니까 더 좋은게 있나 보려고 lt는 3으로 됨(끝까지 돌아야함)

function count(stable, dist) {
  //stable는 마구간 좌표 dist는 가장 가까운 말의 거리
  let cnt = 1,
    ep = stable[0]; //첫번째 말은 첫번째 마굿간에 넣는게 최선 /
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      //cnt는 말의 갯수
      cnt++;
      ep = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1; //미드거리로는 c마리 배치 안되니 더 작은 거리로.
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));
