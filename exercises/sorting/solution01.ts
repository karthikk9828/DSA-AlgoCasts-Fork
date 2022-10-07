// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function swap(array: number[], i: number, j: number) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export function bubbleSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      swap(arr, i, indexOfMin);
    }
  }

  return arr;
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

export function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  return [...result, ...left, ...right];
}

console.log("\n-----------bubbleSort-----------\n");
let arr1 = [8, -1, 19, 0, 112, 3, 5, 77, 109, 2, 10];
console.log(bubbleSort(arr1));

console.log("\n-----------selectionSort-----------\n");
let arr2 = [8, -1, 19, 0, 112, 3, 5, 77, 109, 2, 10];
console.log(selectionSort(arr2));

console.log("\n-----------mergeSort-----------\n");
let arr3 = [8, -1, 19, 0, 112, 3, 5, 77, 109, 2, 10];
console.log(mergeSort(arr3));
