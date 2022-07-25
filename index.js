function binarySearch(arr,elem) {
    let start =0;
    let end = arr.length -1;
    let middle = Math.floor((start+end) /2);
    console.log(start,middle,end);
    while(arr[middle] !== elem && start<= end) {
        console.log(start,middle,end)
        if(elem < arr[middle]){
                 end = middle -1;
        }
        else{
            start = middle +1;
        }
        middle = Math.floor((start+end)/ 2);
    }
    console.log(start,middle,end);
    if(arr[middle] == elem){
        return middle
    }
    return -1;
    //   return arr[middle] === elem ? middle : -1;
}
binarySearch([2,5,6,9,13,15,28,30], 15)
// Binary search solution - good for sorted arrays otherwise sucks

function naiveSearch(long,short){
    let count = 0;
    for(let i =0; i<long.length;i++){
        for(let j =0; j< short.length;j++){
            console.log(long[i], short[j])
            // if there is a match we dont break out and we keep comparing the short string.
            if(short[j] !== long[i+j]){
                console.log('break!')
                break;
            }
            if(j === short.length-1){
                console.log("found one!")
                count++;
            }
        }
    }
    return count;
}

naiveSearch('lorie loled', "lol")

//  this is bubble sort and it works but its not optimized
function bubbleSort(arr){

//  the problem with doing it like this it goes too far, it hits end of loop and then compares one more time but its not there
    for( let i=0;i<arr.length;i++){
        
 for( let j=0; j<arr.length;j++){
    console.log(arr, arr[j], arr[j+1])
    if(arr[j]> arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+2] = temp;
    }
 }
    }
    return arr;
}
bubbleSort([37,45,29,8]);
// optimized with noSwaps
function bubbleSort(arr){
    let noSwaps;
// doesnt do unnecessary sorts
    // this way we no longer have to sort undefined because of -1
        for( let i=arr.length;i>0;i--){
            noSwaps = true;
     for( let j=0; j<i-1;j++){
        console.log(arr, arr[j], arr[j+1])
        if(arr[j]> arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+2] = temp;
            noSwaps = false;
        }
     }
     if(noSwaps) break;
        }
        return arr;
    }
    bubbleSort([37,45,29,8]);

