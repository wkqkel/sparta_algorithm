function solution(n, arr1, arr2) {
  // [1차] 비밀지도
  // 십진수를 다른 진수로 toString 이용 반대는 parseInt이용
  // padStart를 이용하면 이진수 앞에 0을 자릿수만큼 채울 수있음.
  let answer = [];
  // 주어진 배열의 10진수값을 2진수 형태로 만들고,
  // 배열의 반복문을 돌면서, 2진수 요소 하나씩의 각 자릿수를 비교 => 이중반복문
  // 각 자릿수에서 1이 하나라도 있으면 그것은 결과값에도 #(벽)이 있고 그 외는 공백으로 처리
  for (let i = 0; i < n; i++) {
    let string = "";
    for (let j = 0; j < n; j++) {
      if (
        [
          arr1[i].toString(2).padStart(n, 0)[j],
          arr2[i].toString(2).padStart(n, 0)[j],
        ].includes("1")
      ) {
        string += "#";
      } else {
        string += " ";
      }
    }
    answer.push(string);
  }
  return answer;
}
