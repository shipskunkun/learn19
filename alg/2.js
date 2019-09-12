//快排
// 找一个数为基准，比它小的放前面，比它大的放后面，对每个部分做如此操作
//算法复杂度 O(nlog2n)
//空间复杂度 O(log2n) 递归栈的深度
/*T（n）≤2T（n/2） +n，T（1）=0
T（n）≤2（2T（n/4）+n/2） +n=4T（n/4）+2n
T（n）≤4（2T（n/8）+n/4） +2n=8T（n/8）+3n
……
T（n）≤nT（1）+（log2n）×n= O(nlogn)
*/

function quicksort(arr) {
	if(arr.length <= 1) {
		return arr;
	}

	let mid = Math.floor(arr.length/2);
	let midValue = arr.splice(mid, 1)[0];
	let left = [];
	let right = [];
	for(let i = 0; i < arr.length ; i++) {
		let cur = arr[i];
		cur <= midValue ? left.push(cur) : right.push(cur);
	}
	return quicksort(left).concat(midValue).concat(quicksort(right));

}



let arr = [5,6,3,4,9,10,2,8,1];
console.log(quicksort(arr));