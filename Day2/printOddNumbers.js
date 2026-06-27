function printOddNumbers(startnumber, endnumber){
for (let i = startnumber; i <= endnumber; i++) {
    if (i%2 !=0){
        console.log("Odd number is ", i);
    }
}}

printOddNumbers(1, 25)