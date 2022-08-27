const rows = 3; // change this value to increase or decrease the number of rows 
const columns = 3; // change this value to increase or decrease the number of columns 

const getMiddle = (totalCharacters, character) => (Array(totalCharacters)
    .fill(null)
    .map(() => character)).join("")


function square(rows, columns) {
    if (rows <= 0 || columns <= 0) throw new Error('Invalid Input!');

    const totalMiddleCharacters = columns - 2 < 0 ?
        0 :
        columns - 2;

    const firstAndLastRow = `+${getMiddle(totalMiddleCharacters, '-')}${columns == 1 ? '' : '+'}`;

    console.log(firstAndLastRow);

    if (rows === 1) return;

    for (let actualRow = 0; actualRow < rows - 2; actualRow++) console.log(`|${getMiddle(totalMiddleCharacters, ' ')}${columns == 1 ? '' : '|'}`)

    console.log(firstAndLastRow);

}



square(rows, columns);