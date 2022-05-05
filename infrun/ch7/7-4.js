// 삽입정렬

// Insertion Sort는 2번째 원소부터 시작하여 그 앞(왼쪽)의 원소들과 비교하여 삽입할 위치를 지정한 후, 원소를 뒤로 옮기고 지정된 자리에 자료를 삽입 하여 정렬하는 알고리즘이다.
// 최선의 경우 O(N)이라는 엄청나게 빠른 효율성을 가지고 있어, 다른 정렬 알고리즘의 일부로 사용될 만큼 좋은 정렬 알고리즘이다

// 영상풀이
// 처음에 0번인덱스를 그대로 두고 i=1부터 쭉도는데, i가 정해지면 그 안에서 j가 도는데,
// j는 i-1~0까지 도는데 즉 i앞에 있는 값들을 다 돌면서 탐색

// tmp에 j가 돌기전엔 arr[i]를 저장하고, j가 돌면서 arr[j]>tmp보다 크면 뒤쪽으로 복사 arr[j+1]=arr[j] =>큰건 뒤로밀림
// 만약 arr[j]>tmp가 거짓이면 else로 가서 그 자리에서 break
// j가 끝난 바로 뒷지점에 arr[j+1]=tmp
// 삽입정렬 잘 연습하기 손코딩
function solution(arr) {
  let ans = arr;
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i],
      j;
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > tmp) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return ans;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
