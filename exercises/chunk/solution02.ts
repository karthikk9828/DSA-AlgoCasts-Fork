// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk02([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk02([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk02([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk02([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk02([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk02(array: number[], size: number): number[][] {
  let chunks: number[][] = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    chunks.push(chunk);
    index += size;
  }

  console.log(chunks);

  return chunks;
}

chunk02([1, 2, 3, 4], 2);
chunk02([1, 2, 3, 4, 5], 2);
chunk02([1, 2, 3, 4, 5, 6, 7, 8], 3);
chunk02([1, 2, 3, 4, 5], 4);
chunk02([1, 2, 3, 4, 5], 10);

module.exports = chunk02;
