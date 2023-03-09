let array = [
    [0, 1, 2, 3],
    [1, 2, 4, 8],
    [2, 4, 6, 8],
]

function sum(array) {
    let result = []
    // iteramos las filas
    for (let i = 0; i < array.length; i++) {
        let sum = 0
        // iteramos las columnas
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j]
        }
        result.push(sum)
    }
    return result
}

sum(array)


