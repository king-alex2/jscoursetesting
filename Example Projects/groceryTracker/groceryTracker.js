let grocery1;
let grocery2;
let grocery3;

function calculateTotal() {
    grocery1 = parseFloat(document.getElementById('grocery-1').value);
    grocery2 = parseFloat(document.getElementById('grocery-2').value);
    grocery3 = parseFloat(document.getElementById('grocery-3').value);

    let amount = grocery1 + grocery2 + grocery3;
    document.getElementById('result').innerText = `The total amount is : ${amount}`;
}