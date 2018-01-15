const binarySearch = (list, item) => {
	let low = 0,
	 	high = list.length - 1 

	while (low <= high) {
		let mid = Math.floor( ( low + high  ) / 2 )  
		let guess = list[mid] 
		console.log(guess, item)
		if (guess === item) {
			return mid
		}

		guess > item ? high = mid -1 : low = mid + 1
		
	}
	return null
}
