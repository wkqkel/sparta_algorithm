// 자기 바로 앞의 수보다 큰 수만 출력하기(첫번째는 무조건 출력)

const solution = (arr) => {
  console.log(arr[0]); // 첫번째는 무조건 출력
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i - 1], arr[i], i)
    if (arr[i - 1] < arr[i]) {
      console.log(arr[i]);
    }
  }
};

solution([7, 3, 9, 5, 6, 12]);
