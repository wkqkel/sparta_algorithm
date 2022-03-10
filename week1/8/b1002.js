// 터렛

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
for (let i = 1; i < +input[0] + 1; i++) {
  console.log(solution(input[i].split(" ").map(Number)));
}
function solution(input) {
  // 특정 좌표(원의중심)에서 특정 거리(반지름)까지 찍은 점들을 모은 것이 원의 개념.
  // 두 원의 중심좌표와 반지름이 주어질 때, 두 원의 접점의 갯수를 구하라는 문제
  let x1 = input[0];
  let y1 = input[1];
  let r1 = input[2];
  let x2 = input[3];
  let y2 = input[4];
  let r2 = input[5];
  // 반지름이 작은 원을 1번원으로 고정해준다. 그래야 차를 이용할때 양수값을 얻을 수 있음.
  // if (r1 > r2) {
  //   x1 = input[3];
  //   y1 = input[4];
  //   r1 = input[5];
  //   x2 = input[0];
  //   y2 = input[1];
  //   r2 = input[2];
  // }

  const sum = r1 + r2; // 반지름의 합
  const sub = Math.abs(r2 - r1); // 반지름의 차 _절댒값으로 해줌

  let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2); // 두 중심 사이의 거리 (피타고라스)
  // 크게 6가지가 있는데, 먼저 두 원 반지름의 합과 거리의 관계로 두 원의 떨어진 여부를 파악할 수 있고,
  // 나머지 경우는 두 원 반지름의 차도 이용해야 한다.
  if (distance > sum) {
    // 1. 떨어져있을때 _ 거리가 반지름의 합보다 큼
    return 0;
  } else if (distance === sum || (distance === sub && distance !== 0)) {
    //2. 외접 및 3. 내접(distance가 0이아닐때) _ 거리가 반지름의 합이나 차와 같음
    return 1;
    // } else if (sub < distance && distance < sum) {
    // 이 밑에는 걸러져서 distance<sum인것만 남음
  } else if (sub < distance) {
    // 4. 두점에서 만날때_ 두 원의 거리가 내접과 외접사이
    return 2;
  } else if (distance < sub) {
    // 5. 작은 원이 속해있을때 _ 두 원의 거리가 반지름의 차보다 작을때
    return 0;
  } else if (distance === 0) {
    // 원의 중심이 같으면서
    if (sub === 0) {
      // 6. 원의 크기가 같을때
      return -1;
    } else {
      // 7. 작은 원이 속해있을 때
      return 0;
    }
  }
}
