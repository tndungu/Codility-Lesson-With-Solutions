//Time Complexity O(n)
//Space Complexity O(1)

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arraySum = 0,
        indexSum = 0;

    for(let i=0;i<A.length;i++){
        arraySum += A[i];
        indexSum +=i;
    }
    return indexSum + A.length + A.length+1 - arraySum;
}
