//Code written in JavaScript
// Time Complexity: O(N)
// Space Complexity: O(1)

function solution(A, K) {
    if(A.length == 0)
        return A;
        
    for(let i=K;i>0;i--){
        let int = A.pop()
        A.unshift(int)
    }
    return A
}
