function displayOperation() {
    let operation = event.currentTarget.innerText;                    // get text from buttons
    if (document.getElementById("calcDisplay").value == "0") {          // if 0 is still displayed
        document.getElementById("calcDisplay").value = operation;           // replace it with input
    } 
    else {
        document.getElementById("calcDisplay").value += operation;
    }
}

function doOperation() {
    let o = document.getElementById("calcDisplay").value;
    let answer = ""
    let a = "";
    let b = "";
    let ad = o.search("[+]");
    let su = o.search("[-]");
    let mu = o.search("x");
    let di = o.search("[/]");
    if (ad == 1) {
        let funcOperation = o.split("+");
        a = funcOperation[0];
        b = funcOperation[1];
        answer = +a + +b;
        return displayAnswer(answer);
    } else if (su == 1) {
        let funcOperation = o.split("-");
        a = funcOperation[0];
        b = funcOperation[1];
        answer = a - b;
        return displayAnswer(answer);
    } else if (mu == 1) {
        let funcOperation = o.split("x");
        a = funcOperation[0];
        b = funcOperation[1];
        a * 1;
        b * 1;
        answer = a * b;
        return displayAnswer(answer);
    } else if (di == 1) {
        let funcOperation = o.split("/");
        a = funcOperation[0];
        b = funcOperation[1];
        answer = +a / +b;
        return displayAnswer(answer);
    } else {
        answer = ("error");
        return displayAnswer(answer);
    } 
}

function displayAnswer (an) {
    document.getElementById("calcDisplay").value = an;
    operation = an;
}

function clearButton() {
    document.getElementById("calcDisplay").value = 0;
    operation = 0;
}