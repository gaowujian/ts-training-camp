const a = [1, [2, 3], [4, [5, [6]]]];

function flat(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (Object.prototype.toString.call(element) == "[object Array]") {
      flat(element, result);
    } else {
      result.push(element);
    }
  }
  return result;
}

const result = flat(a);
console.log("result:", result);
