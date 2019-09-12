/*插入排序
类似于手抓牌式
算法复杂度 O(n^2)
空间复杂度 O(1)
注意 for 改成while 是怎么改的，满足循环条件，才能执行循环体
for（I=初值；I<末值;I+=步频）{
	循环体
}
都可以变成：
I=初值；
while（I<末值）{
	循环体
	I+=步频；
}
*/

function insertSort(arr) {
	let arrSort = [];
	arrSort.push(arr[0]);
	for(let i = 1; i < arr.length ; i++) {
		let tempt = arr[i];
		for(let j = arrSort.length; j>=0; j--) {
			if(tempt > arrSort[j-1] || j == 0) {
				arrSort[j] = tempt;
				break;
			}
			else{
				arrSort[j] = arrSort[j-1];
			}
		}
	}
	return arrSort;
}
let arr = [5,6,3,4,9,10,2,8,1];
console.log(insertSort(arr));