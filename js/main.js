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
        document.getElementById("output").innerHTML = "Numbers between 2 and 999999999";
        return;
    };

    const andComma = divCalculator(inputValue);
    const finalValue = commaReplace(andComma);

    document.getElementById("output").innerHTML = finalValue;
});

const divCalculator = (inputValue) => {
    let total = "Divisible by"
    let i;
    for (i = 1; i < inputValue; i++) {
        if (inputValue % i === 0) {
            total += ` ${i},`;
        };
    };
    if (total == "Divisible by 1,") {
        total = "This is a prime number!!";
    } else {
        let regex = /Divisible by 1,/gi;
        total = total.replace(regex, 'Divisible by');
    };
    return total;
}

const commaReplace = (andComma) => {
    //remove last character, a comma
    andComma = andComma.slice(0, -1);
    // define a replacement
    const replacement = " and";
    // add replacement to last comma
    andComma = andComma.replace(/,([^,]*)$/,replacement+'$1');
    return andComma;
};

$(document).ready(function(){
    $(".button").click(function(){
        $(".button").addClass("submitted");
        setTimeout(function(){
            $('.button').removeClass('submitted');
        },500);
    });
});