let fullOp = "";

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

    if (['+', '-', 'x'].includes(number) && /[+-x]/.test(fullOp)){
         return;
    }
    

    fullOp = fullOp + number;
    showNumber(fullOp);
}

function calculate() {
    console.log({ fullOp });

    const [a, op, b] = fullOp.split(/(\+|-|x|\/)/gm);
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
        default:
            break;
    }

    showNumber(res);
    fullOp = "";
}

function showNumber(n) {
    document.getElementById('screen').innerHTML = n;
}