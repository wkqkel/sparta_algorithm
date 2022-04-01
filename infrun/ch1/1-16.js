// 중복문자제거 indexOf 메써드 사용

function solution(s){
    // console.log(s.split("").filter((e,i)=>i===s.indexOf(e)).join(""))   
    // indexOf("k",3) 두번째 인자는 3번인덱스부터 찾아라 해서 처음 나오는 인덱스 반혼
    // 인덱스로 탐색해야하므로 for of로 안함
    // let answer=""
    // for(let i=0; i<s.length;i++){
    //     if(i===s.indexOf(s[i])){
    //         answer+=s[i]
    //     }
    // }
    // console.log(answer)

    // 특정문자 갯수찾기
    let answer=0;
    let pos=s.indexOf('k')
    while(pos!==-1){
        answer++
        pos=s.indexOf('k',pos+1)
    }
    console.log(answer)
}
solution("ksekkset")