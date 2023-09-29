function clearDisplay(){
    document.getElementById('result').value = '';
}

function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        const expression = document.getElementById('result').value;
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}