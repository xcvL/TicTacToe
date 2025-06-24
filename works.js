function OorX(jud, get) {
    if(jud == 0) {
        get.innerText = "O";
        sym = "O";
    }
    else {
        get.innerText = "X";
        sym = "X";
    }
    jud = (jud + 1) % 2;
    return [jud, sym];
}

function jud(arr, sym) {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const arr3 = [6, 7, 8];
    const arr4 = [0, 3, 6];
    const arr5 = [1, 4, 7];
    const arr6 = [2, 5, 8];
    const arr7 = [0, 4, 8];
    const arr8 = [2, 4, 6];
    const arrs = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8];
    
    for(let i = 0; i<8; i++) {
        const result = arrs[i].every(el => arr.includes(el));
        if(result == true) {
            alert(sym + " win!");
        }
    }
}

let toggle = 0;
let Oarr = [];
let Xarr = [];

document.querySelectorAll(".setting").forEach((cell, index) => {
    let innerButton = document.querySelectorAll(".text")[index];
    cell.addEventListener("click", () => {
        if(!document.querySelectorAll(".setting")[index].textContent.trim()) {
            resultArr = OorX(toggle, innerButton);
            toggle = resultArr[0];
            if(resultArr[1] == "O") {
                Oarr.push(index);
                jud(Oarr, "O");
            }
            else {
                Xarr.push(index);
                jud(Xarr, "X");
            }
        }
    });
});

document.getElementById("reset").addEventListener("click", () => {
    for(let index = 0; index<9; index++) {
        let innerButton = document.querySelectorAll(".text")[index];
        innerButton.innerText = "";
    };
    toggle = 0;
    Oarr = [];
    Xarr = [];
});