/// DOM Items
let display = document.getElementById('display');
const Buttons = document.getElementsByTagName('button');
const ac = document.getElementById('ac');
const per = document.getElementById('percentage');
const multiply = document.getElementById('multiply');
const equal = document.getElementById('equal');
const point = document.getElementById('point');
const divide = document.getElementById('divide');
const plus = document.getElementById('plus');
const plusminus = document.getElementById('plusminus');
const minus = document.getElementById('minus');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const b = document.getElementsByClassName('buttons');
let currentNum = "";
let previousNum = "";
let operator = "";
let Operating = false
let Equaled = false

const buttonsArray = [
    zero, one, two, three, four, five, six, seven, eight, nine
]

// Add Event Listeners to numbers and decimal
for (let i = 0; i < buttonsArray.length; i++) {
    const number = buttonsArray[i];
    number.onmousedown = () => {

        buttonDown(buttonsArray[i]);
        if (Operating == true || Equaled == true) {
            clearDisplay()
            Operating = false
            Equaled = false
            addToDisplay(buttonsArray[i])
        } else {
            addToDisplay(buttonsArray[i])
        }
    };
}

for (let i = 0; i < buttonsArray.length; i++) {
    const number = buttonsArray[i];
    number.onmouseup = () => {
        buttonUp(buttonsArray[i]);
    };
}


//Operators

ac.onmousedown = () => {
    buttonDown(ac)
    clearDisplay()
    reset()
}
ac.onmouseup = () => {
    buttonUp(ac)
}

plus.onmousedown = () => {
    buttonDown(plus)
    setOperation("+")


}

plus.onmouseup = () => {
    buttonUp(plus)
}

minus.onmousedown = () => {
    buttonDown(minus)
    setOperation("-")

}

minus.onmouseup = () => {
    buttonUp(minus)
}

multiply.onmousedown = () => {
    buttonDown(multiply)
    setOperation("*")
}

multiply.onmouseup = () => {
    buttonUp(multiply)
}

divide.onmousedown = () => {
    buttonDown(divide)
    setOperation("/")
}

divide.onmouseup = () => {
    buttonUp(divide)
}

plusminus.onmousedown = () => {
    buttonDown(plusminus)
    setOperation("±")
    togglePlusMinus()
}

plusminus.onmouseup = () => {
    buttonUp(plusminus)
}

per.onmousedown = () => {
    buttonDown(per)
    setOperation("%")
}

per.onmouseup = () => {
    buttonUp(per)
}

point.onmousedown = () => {
    buttonDown(point)
    if (display.innerText.includes(".")) {
        console.log("Can't add more .s")
    } else { display.innerText += "." }
}

point.onmouseup = () => {
    buttonUp(point)
}

equal.onmousedown = () => {
    buttonDownEqual(equal)
    sumOfEqual()
    reset()
    Equaled = true
}

equal.onmouseup = () => {
    buttonUpEqual(equal)
}




// Functions
function addToDisplay(prop) {
    if (display.innerText == 0 && !display.innerText.includes(".")) {
        display.innerText = prop.value
    } else {
        display.innerText += prop.value
    }
}

function sumOfEqual() {

    if (currentNum === "" && previousNum === "" && operator == "") {

    } else if (currentNum !== "") {
        previousNum = currentNum
        currentNum = display.innerText

        previousNum = Number(previousNum);
        currentNum = Number(currentNum);
        if (operator == "+") {
            let result = previousNum += currentNum
            display.innerText = result
        } else if (operator == "-") {
            let result = previousNum -= currentNum
            display.innerText = result
        } else if (operator == "*") {
            let result = previousNum *= currentNum
            display.innerText = result
        } else if (operator == "/") {
            let result = previousNum /= currentNum
            display.innerText = result
        } else if (operator == "±") {
            let result = previousNum
            display.innerText = result
        }

    }

}



function setOperation(symbol) {
    setNumbers()
    Operation(symbol)
    operator = symbol
    Operating = true;
}


function setNumbers() {
    if (currentNum == "") {
        currentNum = display.innerText
    }
    else {
        previousNum = currentNum
        currentNum = display.innerText
    }
}

function Operation(param) {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    if (Operating == true) {
    } else {
        if (param === "+") {
            if (previousNum !== "") {
                currentNum = currentNum + previousNum
                display.innerText = currentNum
            }
            else {
                previousNum = currentNum
            }
        }
        if (param === "-") {
            if (previousNum !== "") {
                currentNum = currentNum - previousNum
                display.innerText = currentNum
            }
            else {
                previousNum = currentNum

            }
        }
        if (param === "*") {
            if (previousNum != "") {
                currentNum = previousNum * currentNum
                display.innerText = currentNum
            }
            else {
                previousNum = currentNum

            }
        }
        if (param === "/") {
            if (previousNum != "") {
                currentNum = previousNum / currentNum
                display.innerText = currentNum
            }
        }
        if (param === "%") {

            currentNum = currentNum / 100
            display.innerText = currentNum

        }

        if (currentNum === 0) {
            previousNum = 0
            currentNum = 0
            display.innerText = 0
        }
    }
}

let isMinus = false;

function togglePlusMinus() {

    if (isMinus) {
        currentNum = -currentNum * -(1)
        display.innerText = currentNum
    } else {
        currentNum = -currentNum
        display.innerText = currentNum
    }
}

function buttonDown(prop) {
    prop.classList.add("down");
}
function buttonUp(prop) {
    prop.classList.remove("down");
}

function buttonDownEqual(prop) {
    prop.classList.add("down-equal");
}
function buttonUpEqual(prop) {
    prop.classList.remove("down-equal");
}

function clearDisplay() {
    display.innerText = 0;

}

function reset() {
    currentNum = "";
    previousNum = "";
    operator = "";
    Operating = false

}








///Keypad
document.onkeydown = function keyListener(event) {
    event = event || window.event; //capture the event, and ensure we have an event
    let key = event.key || event.which || event.keyCode; //find the key that was pressed
    if (key === "c" || event.keyCode == 27) {
        buttonDown(ac)
        clearDisplay()
        reset()
    } else if (event.keyCode == 8) {
        display.innerText = display.innerText.slice(0, -1);
        if (display.innerText === "") {
            display.innerText = 0
        }
    } else if (event.key == ".") {
        buttonDown(point)
        if (display.innerText.includes(".")) {
            console.log("Can't add more .s")
        } else { display.innerText += "." }
    } else if (event.key == "+") {
        buttonDown(plus)
        setOperation("+")

    } else if (event.key == "-") {
        buttonDown(minus)
        setOperation("-")

    } else if (event.key == "*") {
        buttonDown(multiply)
        setOperation("*")

    } else if (key == "/") {
        buttonDown(divide)
        setOperation("/")

    } else if (event.key == "%") {
        buttonDown(per)
        setOperation("%")
    } else if (event.key == "±") {
        buttonDown(plusminus)
        setOperation("±")
        togglePlusMinus()
    } else if (event.key == "=" || event.key == "Enter") {
        buttonDownEqual(equal)
        sumOfEqual()
        reset()
        Equaled = true


    } else {
        buttonDown(buttonsArray[key])
        if (Operating == true || Equaled == true) {
            clearDisplay()
            Operating = false
            Equaled = false
            addToDisplay(buttonsArray[key])
        } else {
            addToDisplay(buttonsArray[key])
        }

    }
}


document.onkeyup = function keyListener(event) {
    event = event || window.event; //capture the event, and ensure we have an event
    let key = event.key || event.which || event.keyCode; //find the key that was pressed
    if (key === "c" || event.keyCode == 27) {
        buttonUp(ac)
    } else if (event.key == ".") {
        buttonUp(point)
    } else if (event.key == "+") {
        buttonUp(plus)
    } else if (event.key == "-") {
        buttonUp(minus)
    } else if (event.key == "*") {
        buttonUp(multiply)
    } else if (event.key == "%") {
        buttonUp(per)
    } else if (event.key == "±") {
        buttonUp(plusminus)
    } else if (event.key == "=" || event.key == "Enter") {
        buttonUpEqual(equal)

    } else if (key == "/") {
        buttonUp(divide)
    } else {
        buttonUp(buttonsArray[key])
    }
}
