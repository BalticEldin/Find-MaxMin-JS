let Numbers = [];
let insertNumber = prompt("Insert a number: ");


while (isNaN(insertNumber) && insertNumber.toLowerCase() !== 'max' && insertNumber.toLowerCase() !== 'min') {
    insertNumber = prompt("Please enter a valid number or 'max/min' to get results");
}

// Continue asking for numbers until the user enters 'max' or 'min'
while (!isNaN(insertNumber)) {
    Numbers.push(parseInt(insertNumber));
    insertNumber = prompt("Enter another number or write 'max'/'min' to get results");

    while (isNaN(insertNumber) && insertNumber.toLowerCase() !== 'max' && insertNumber.toLowerCase() !== 'min') {
        insertNumber = prompt("Please enter a valid number or 'max/min' to get results");

    }

    // If user inputs 'max' or 'min', exit the loop
    if (insertNumber.toLowerCase() === 'max' || insertNumber.toLowerCase() === 'min') {
        break;
    }
}

// Check for 'max' or 'min' input and display the result
if (insertNumber.toLowerCase() === 'max') {
    console.log(`The whole array : [${Numbers}]`)
    console.log(`The max number is : ${Math.max(...Numbers)}`);
} else if (insertNumber.toLowerCase() === 'min') {
    console.log(`The whole array : [${Numbers}]`)
    console.log(`The min number is : ${Math.min(...Numbers)}`);
}


