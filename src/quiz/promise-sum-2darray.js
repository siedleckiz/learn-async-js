function sumOfARow(arr, rowIndx) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length > rowIndx) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr[rowIndx].length; i++) {
                    sum += arr[rowIndx][i];
                }
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


async function calculateSum() {
    rowSumPromises = [];

    for(let x = 0; x < array2D.length; x++) {
        rowSumPromises.push(sumOfARow(array2D, x))
    }

    try {
        const rowSums = await Promise.all(rowSumPromises)
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log(`Sum = ${sum}`)
        return 'done'
    } catch(error) {
        console.log(`Error Msg: ${error}`)
        return 'failed'
    }
}

calculateSum().then((status) => console.log(status))

/*
async function main() {
    const result = await calculateSum();
    console.log(result)
}
*/