/* The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. 
On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number.

For example:
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of all of the calibration values? */

//This has to be done in the console because it needs to access our credentials 
const summonPuzzleInput = async () => {
    const response = await fetch('https://adventofcode.com/2023/day/1/input');
    const responseText = await response.text();
    return responseText;
}

const puzzleInput = await summonPuzzleInput();

// //now that we have access to the input string...
async function processInput (puzzleInput) {
    let total = 0;

    // Separate the string by line, where each line is an element in an array
    const lines = puzzleInput.split('\n');

    // Iterate through the array to find the first and last numbers in each element
    for (const line of lines) {
        // Make the string all lowercase
        //const lower = line.toLowerCase();
        
        // Replace only the first letter of words 'one' to 'nine' with corresponding digits
        const modifiedString = line.toLowerCase()
        .replaceAll('one', 'o1ne')
        .replaceAll('two', 't2wo')
        .replaceAll('three', 't3hree')
        .replaceAll('four', 'f4our')
        .replaceAll('five', 'f5ive')
        .replaceAll('six', 's6ix')
        .replaceAll('seven', 's7even')
        .replaceAll('eight', 'e8ight')
        .replaceAll('nine', 'n9ine')

        // Each line remove anything that is not a number
        const numsOnly = modifiedString.replace(/\D/g, '');
           
        // Check if numsOnly is not empty before accessing its elements
        if (numsOnly) {
            // Declare a variable and assign it to the first num
            const first = numsOnly[0];
            // Declare a variable and assign it to the last num
            const last = numsOnly[numsOnly.length - 1];
            // Declare a resulting num
            const resulting = first + last;
            // Convert the string into a number and add to total
            total += Number(resulting);
            console.log({ line, modifiedString, numsOnly, first, last, resulting, total });
        }
    }
    return total;
}


// const example = 'trknlxnv43zxlrqjtwonec';
// console.log(processInput(example));

const result = await processInput(puzzleInput);
console.log(result);


