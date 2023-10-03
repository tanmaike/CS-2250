function displayOperation() {
    let answer = "";
    const n = ("Choose a Number");
    let operation = event.currentTarget.innerText;                    // get text from buttons
    if (document.getElementById("calcDisplay").value == "0") {          // if 0 is still displayed
        document.getElementById("calcDisplay").value = operation;           // replace it with input
    } 
    else {
        document.getElementById("calcDisplay").value += operation;
    }
    if (document.getElementById("calcDisplay").value.includes("=")) {
        doOperation(operation);
    }
}

function doOperation(o) {
    let func = o;
    let a = "";
    let b = "";
    let add = o.search("+");
    let sub = o.search("-");
    let mul = o.search("*");
    let div = o.search("/");
    if (Boolean(add)) {
        const funcOperation = text.split("+");
        a = funcOperation[0];
        b = funcOperation[1];
        
    } else if (Boolean(sub)) {

    } else if (Boolean(mul)) {

    } else if (Boolean(div)) {

    } else {
        return "error";
    }
    document.getElementById("demo").innerHTML = myArray[1]; 
}

function displayAnswer (an) {
    
}

function clear() {
    
}