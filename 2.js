function QuickSort(Arr) {
  if (Arr.length <= 1) {
    return Arr;
  }

  const pivot = Arr[Arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < Arr.length - 1; i++) {
    if (Arr[i] < pivot) {
      leftArr.push(Arr[i]);
    } else {
      rightArr.push(Arr[i]);
    }
  }

  return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
}

var data = [
  ["Keren"],
  ["D", "W", "B", "T", "A", "S", "U", "D", "M", "O", "Y", "T", "I", "D"],
  ["Sekali"],
];
console.log(QuickSort(data));
