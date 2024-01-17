let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let checkMsg = document.getElementById("check-msg");
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count;
}

function save() {
    checkMsg.textContent = `Saved Passenger Count: ${count}`;
    let countStr = `${count} - `;
    saveEl.textContent += countStr;

    countEl.textContent = 0;
    count = 0;
}