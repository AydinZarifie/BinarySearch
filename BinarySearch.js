const array = [0, 8, 9, 11, 12, 17, 19];

function binarySearch(key) {

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {

        let middle = Math.floor((start + end) / 2);

        if (array[middle] == key) {
            return middle;
        }

        else if (array[middle] < key) {
            start = middle + 1;
        }

        else {
            end = middle - 1;
        }

    }


    return -1;
}


console.log(binarySearch(0));