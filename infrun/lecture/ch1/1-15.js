// function solution(str){
//     if(str.length%2===0){
//         console.log(str[str.length/2-1]+str[str.length/2])
//     } else {console.log(str[Math.floor(str.length/2)])}
// }


function solution(s){
    let answer;
    let mid= Math.floor(s.length/2)
    if(s.length%2===1) answer=s.substring(mid, mid+1) // substring mid+1인덱스 전까지 뽑아냄
    else answer= s.substring(mid-1,mid+1)
    // substr(index,number) 인덱스부터 몇개를 뽑아내라 
  return answer
}
console.log(solution("go2od"))