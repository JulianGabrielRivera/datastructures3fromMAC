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