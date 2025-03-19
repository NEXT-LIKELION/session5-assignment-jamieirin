
const matrix = [
["*"],
["***"],
["*****"],
["*******"],
["**********"]
    ];

for (let i=0; i< matrix.length; i++){
    for(let j=0; j< matrix[i].length; j++){
        let spaces= " ".repeat(matrix.length - i -1);
        console.log(spaces + matrix[i][j]);
        }
    }