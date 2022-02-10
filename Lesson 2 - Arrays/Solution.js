//Code written in JavaScript
// Time Complexity: O(N)
// Space Complexity: O(1)

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 0)
        return A;
        
    for(let i=K;i>0;i--){
        let int = A.pop()
        A.unshift(int)
    }
    return A
}
