

const searchArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27];

const binarySearchForRecursive = (arr, target) => {

    let mid = Math.floor(arr.length / 2);
    
    if (arr.length === 1) {
        return 0;
    }

    let firstArr = arr.slice(0, mid);
    let secondArr = arr.slice(mid, arr.lenght);
 
    return arr[mid] <= target ? mid + binarySearchForRecursive(secondArr, target) : binarySearchForRecursive(firstArr, target);
};

// return array index.
console.log(binarySearchForRecursive(searchArr, 1));
console.log(binarySearchForRecursive(searchArr, 3));
console.log(binarySearchForRecursive(searchArr, 8));
console.log(binarySearchForRecursive(searchArr, 9));
console.log(binarySearchForRecursive(searchArr, 12));
console.log(binarySearchForRecursive(searchArr, 15));
console.log(binarySearchForRecursive(searchArr, 24));
console.log(binarySearchForRecursive(searchArr, 27));