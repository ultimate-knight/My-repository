window.onload = function () {
    const clearButton = document.querySelector('.js-clear');
    const display = document.querySelector('.js-display');

    clearButton.addEventListener('click', function() {
        display.innerHTML = "0";
    });

    for(let i = 0; i <= 9; i++) {
        foo('.js-' + i, i);
    }

    const plusButton = document.querySelector('.js-plus');
    plusButton.addEventListener('click', function() {
        if (display.innerHTML.endsWith("+")) {
            return;
        }
        display.innerHTML = display.innerHTML + "+";
    });

    const equalsButton = document.querySelector('.js-equals');
    equalsButton.addEventListener('click', function() {
        const result = eval(display.innerHTML);
        display.innerHTML = result;
    });
};

function foo(className, value) {
    const display = document.querySelector('.js-display');

    const button = document.querySelector(className);
    button.addEventListener('click', function() {
        if (display.innerHTML === '0') {
            display.innerHTML = value;
        } else {
            display.innerHTML = display.innerHTML + value;
        }
    }); 
}