const quicksort = arr => {
    if (arr.length < 2)
        return arr;
    // let pivot = arr[0]; //递归条件
    let datum = Math.floor(arr.length / 2);//取基准点
    let midIndexVal = arr.splice(datum, 1);
    let left = [], right = [];
    //遍历数组，进行判断分配
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midIndexVal) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(midIndexVal, quickSort(right));
};