let storedNum = "";
let operator = "";

function numberPressed(value) {
    const input = document.getElementById("input");
    // if (storedNum.length > 0) {
    //     input.value = "";
    // }
    switch (value) {
        case '.':
            if (input.value.length < 1 || input.value.includes(".")){
                return;
            }
            else {
                input.value += ".";
            }
            break;
        case 'C':
            input.value = "";
            break;
        case 0:
            if (input.value.charAt(0) === '0' && input.value.length === 1) {
                return;
            }
        default:
            if (input.value.charAt(0) === '0' && input.value.length === 1) {
                input.value = value.toString();
            }
            else {
                input.value += value.toString();
            }
    }
}

function operatorPressed(opr) {
    storedNum = input.value;
    operator = opr;
    input.value = "";
}

function equalsPressed() {
    let output = undefined;

    switch (operator) {
        case "+":
            output = parseFloat(storedNum) + parseFloat(input.value);
            break;
        case "-":
                output = parseFloat(storedNum) - parseFloat(input.value);
                break;
        case "*":
            output = parseFloat(storedNum) * parseFloat(input.value);
            break;
        case "/":
                output = parseFloat(storedNum) / parseFloat(input.value);
                break;
    }

    input.value = output;

    storedNum = "";
    operator = "";
}