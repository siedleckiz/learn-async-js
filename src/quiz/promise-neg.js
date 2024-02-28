function negsPerRow(arr, rowIndx) {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIndx) {
            setTimeout(() => {
                arr[rowIndx].filter((e) => {
                    return e < 0;
                }).length > 0 ? resolve(`Found Evidence : ${arr[rowIndx]}`) : resolve("No evidence found")
            }, 0);
        }
        else {
            reject(`Row Index ${rowIndx} must be within 0 and ${arr.length}`)
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

negsPerRowPromises = [];

for(let x = 0; x < array2D.length; x++) {
    negsPerRowPromises.push(negsPerRow(array2D, x))
}

Promise.all(negsPerRowPromises).then((results) => {
    console.log(results);
}).catch((error) => console.log(`Error Msg: ${error}`))