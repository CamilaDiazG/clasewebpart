let fullOp = "";
let historyList = [];

function handleClick(number) {
    if (number === 'c') {
        fullOp = "";
        showNumber("");
        return;
    }

    if (number === '=') {
        calculate();
        return;
    }

    if (fullOp === "" && number === '-') {
        fullOp = "-";
        showNumber(fullOp);
        return;
    }

    if (['+', '-', 'x', '/', '^'].includes(number)) {
        const last = fullOp[fullOp.length - 1];

        if (['+', '-', 'x', '/', '^'].includes(last)) {
            fullOp = fullOp.slice(0, -1);
        }
    }

    fullOp = fullOp + number;
    showNumber(fullOp);
}

function calculate() {
    console.log({ fullOp });

    let operation = fullOp;
    let isNegativeStart = false;

    if (operation.startsWith("-")) {
        isNegativeStart = true;
        operation = operation.slice(1);
    }

    const parts = operation.split(/(\+|-|x|\/|\^)/gm);

    let a = parts[0];
    let op = parts[1];
    let b = parts[2];

    if (isNegativeStart) {
        a = "-" + a;
    }

    console.log({ a, op, b });

    let res;

    switch (op) {
        case '+':
            res = Number(a) + Number(b);
            break;
        case '-':
            res = Number(a) - Number(b);
            break;
        case 'x':
            res = Number(a) * Number(b);
            break;
        case '/':
            res = Number(a) / Number(b);
            break;
        case '^':
            res = Number(a) ** Number(b);
            break;
        default:
            showNumber("Error");
            fullOp = "";
            return;
    }

    addToHistory(fullOp, res);
    showNumber(res);
    fullOp = "";
}

function showNumber(n) {
    document.getElementById('screen').innerHTML = n;
}

function addToHistory(op, result) {
    historyList.unshift(`${op} = ${result}`);

    const container = document.getElementById("history");
    container.innerHTML = "";

    historyList.forEach(item => {
        const div = document.createElement("div");
        div.className = "history-item";
        div.textContent = item;
        container.appendChild(div);
    });
}