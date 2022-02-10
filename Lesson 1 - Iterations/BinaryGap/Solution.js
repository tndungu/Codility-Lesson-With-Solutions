//Code written in JavaScript
// Time Complexity: O(log(N))
// Space Complexity: O(1)

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binaryGap = 0;
    let start = false,
        tempCount = -1;

    while(N > 0){
        if(N%2 == 1){
            binaryGap = tempCount > binaryGap ? tempCount : binaryGap;
            tempCount = 0;
        }
        else if(tempCount !== -1){
                tempCount++;
        }
        N = Math.floor(N/2);
    }
    return binaryGap;
}
