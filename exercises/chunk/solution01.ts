// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array: number[], size: number): number[][] {
  let chunks: number[][] = [];

  for (const element of array) {
    const lastChunk = chunks[chunks.length - 1];
    if (lastChunk === undefined || lastChunk.length === size) {
      chunks.push([element]);
    } else {
      lastChunk.push(element);
    }
  }

  console.log(chunks);

  return chunks;
}

chunk([1, 2, 3, 4], 2);
chunk([1, 2, 3, 4, 5], 2);
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
chunk([1, 2, 3, 4, 5], 4);
chunk([1, 2, 3, 4, 5], 10);

module.exports = chunk;
