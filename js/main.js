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
    // console.log(guess.value);
    // stops any massive numbers, also stops decimal numbers
    if (inputValue.toString().length >= 10 || inputValue < 2 || !Number.isInteger(Number(guess.value))) {
        const warning = document.querySelector(".warning");
        warning.classList.add("show");
        setTimeout(function(){
            warning.classList.remove("show");
        },3000);
        return;
    };

    // prime number test
    const testPrime = (inputValue) => {
        if ( inputValue === 1 ) {
            return ('false');
        } else if ( inputValue === 2 ) {
            return ('true');
        } else {
            for ( let i = 2; i < inputValue; i++ ) {
                if ( inputValue % i === 0 ) {
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

    // line below not currently needed
    // const finalValue = commaReplace(andComma);

    // document.getElementById("output-prime").innerHTML = testPrime(value);
    document.getElementById("output-prime").innerHTML = capitalizeFirst(testPrime(inputValue));
    document.getElementById("output-reduced").innerHTML = reducedOutput(value);
    document.getElementById("output-list").innerHTML = listOutput;
    document.getElementById("output-sqrt").innerHTML = Math.sqrt(inputValue);;
    document.getElementById("output-squared").innerHTML = (inputValue * inputValue);
    document.getElementById("output-cbrt").innerHTML = Math.cbrt(inputValue);
    document.getElementById("output-cubed").innerHTML = (inputValue * inputValue * inputValue);
});

// This function takes an input number, creates an empty array and loops over
const divCalculator = (inputValue) => {
    // create empty array
    let total = [];
    // loop over each number to find divisors
    for (let i = 1; i <= inputValue; i++) {
        if (inputValue % i === 0) {
            total.push(i);
        };
    };
    return total;
}

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// working on pairs of divisors

var myArray = [1, 2, 4, 8, 16, 32];

function firstAndLast(myArr) {
    var firstItem = myArr[0];
    var lastItem = myArr[myArr.length - 1];
    var objOutput = [firstItem, lastItem];
	myArray.shift();
	myArray.pop();
    return objOutput;
}
var display = firstAndLast(myArray);
console.log(display, myArray);


$(document).ready(function() {
    $( ".button" ).click(function() {
        $( ".button" ).addClass( "submitted" );
        setTimeout(function() {
            $( '.button' ).removeClass( 'submitted' );
        },500);
    });
    $(".github").hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});