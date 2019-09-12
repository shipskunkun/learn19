//冒泡排序
//算法复杂度 O(n^2)
//空间复杂度 O(1)
function bubbleSort(arr) {
	let length = arr.length;
	for(let i = 0; i < length - 1; i++) {
		for(let j = 0; j < length - i -1 ; j++) {
			if(arr[j] > arr[j+1]) {
				let temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp
			}
		}
	}
	return arr;
}

let arr = [5,6,3,4,9,10,2,8,1];
console.log(bubbleSort(arr));