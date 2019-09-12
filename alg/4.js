/*
选择排序
每次选剩余队列中最小的放到arrSort中
*/

function swap(arr, i , min) {
    let tempt = arr[i];
    arr[i] = arr[min];
    arr[min] = tempt;
}

function selectSort(arr) {
  for(let i = 0; i < arr.length ; i++) {
    debugger;
    var min = i;
    for(var j = i+1; j< arr.length; j++) {
      if(arr[min] > arr[j]) {
        min = j;
      }
    }
    swap( arr, i, min);
  }
  return arr;
}


let arr = [5,6,3,4,9,10,2,8,1];
console.log(selectSort(arr));