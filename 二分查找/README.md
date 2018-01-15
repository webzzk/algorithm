## 二分查找

输入必须为一个`有序列表`，如果包含查找的元素返回其位置，没有则null

```
将n个元素分成个数大致相同的两半，取a[n/2]与欲查找的x作比较，如果x=a[n/2]则找到x，算法终止
```
```
假设有一个 1 - 10000 的数组 arr
for(let i = 1; i <= 10000; i++) {
	arr.push(i)
}

查找6789所在的位置

```
```
简单查找 for循环
for(let i = 0; i < arr.length; i++) {
	if(arr[i] === 6789)
		console.log(i)
}

1 > 2 > 3 > ... > 6789  
共 6789 步
```
```
简单的二分查找 （有些问题，但最好理解）
const binarySearch = (list, item) => {
	let low = 0, // 开始
	 	high = list.length - 1 // 结束

	while (low <= high) {
		let mid = Math.floor( ( low + (high - low) ) / 2 )   // 中间取值
		let guess = list[mid] 

		if (guess === item) {
			return mid
		}

		guess > item ? high = mid -1 : low = mid + 1  
		
	}
	return null
}

5000 > 7500 > 6250 > 6875 > 6562 > 6718 > 6796 > 6757 > 6776 > 6786 > 6791 > 6788 > 6789
共 13 步
```