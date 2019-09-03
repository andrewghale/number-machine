// Guess = whatever is in the input
const guess = document.getElementById('guessField');
// Button = submit button
const button = document.getElementById('submitguess');

// Function 1
// Click event on submit
button.addEventListener('click', function(e) {
    // prevents page from refreshing
    e.preventDefault();

    const inputValue = parseInt(guess.value);
    // stops any massive numbers
    if (inputValue.toString().length >= 10 || inputValue < 2) {
        document.getElementById("output-reduced").innerHTML = "Numbers between 2 and 999999999";
        document.getElementById("output-list").innerHTML = "Numbers between 2 and 999999999";
        return;
    };

    // prime number test
    const testPrime = (inputValue) => {
        if ( inputValue === 1 ) {
            return ('false');
        } else if ( inputValue === 2 ) {
            return ('true');
        } else {
            for ( var x = 2; x < inputValue; x++ ) {
                if ( inputValue % x === 0 ) {
                    return ('false');
                }
            }
        return ('true');
        }
    }

    // array of divisors
    const value = divCalculator(inputValue);

    // turns the array into a string
    listOutput = value.join(', ');

    // reduces array to sum of divisors
    const reducedOutput = (value) => {
        let reducedOutput = (value.reduce((acc, curr) => acc + curr));
        return reducedOutput;
    }
    // squaring the user input
    let squaredOutput = (inputValue * inputValue);
    let cubedOutput = (inputValue * inputValue * inputValue);

    // square root of the user input
    let sqrtOutput = Math.sqrt(inputValue);
    let cbrtOutput = Math.cbrt(inputValue);


    // line below not currently needed
    // const finalValue = commaReplace(andComma);

    // document.getElementById("output-prime").innerHTML = testPrime(value);
    document.getElementById("output-prime").innerHTML = capitalizeFirst(testPrime(inputValue));
    document.getElementById("output-reduced").innerHTML = reducedOutput(value);
    document.getElementById("output-list").innerHTML = listOutput;
    document.getElementById("output-sqrt").innerHTML = sqrtOutput;
    document.getElementById("output-squared").innerHTML = squaredOutput;
    document.getElementById("output-cbrt").innerHTML = cbrtOutput;
    document.getElementById("output-cubed").innerHTML = cubedOutput;
});

const divCalculator = (inputValue) => {
    // create empty array
    let total = [];
    // loop over each number to find divisors
    for (let i = 0; i <= inputValue; i++) {
        if (inputValue % i === 0) {
            total.push(i);
        };
    };
    return total;
}

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


    // if (total == "Divisible by 1,") {
    //     total = "This is a prime number!!";
    // } else {
    //     let regex = /Divisible by 1,/gi;
    //     total = total.replace(regex, 'Divisible by');
    // };


    // function below not currently needed

    // const commaReplace = (andComma) => {
    //     //remove last character, a comma
    //     andComma = andComma.slice(0, -1);
    //     // define a replacement
    //     const replacement = " and";
    //     // add replacement to last comma
    //     andComma = andComma.replace(/,([^,]*)$/,replacement+'$1');
    //     return andComma;
    // };

$(document).ready(function(){
    $(".button").click(function(){
        $(".button").addClass("submitted");
        setTimeout(function(){
            $('.button').removeClass('submitted');
        },500);
    });
});