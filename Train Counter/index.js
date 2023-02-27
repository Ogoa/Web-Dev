let count = 0;
let countEl = document.getElementById("passenger-count")
let saveEl = document.getElementById("save-count")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let strCount = count + " - "
    saveEl.textContent += strCount
    count = 0
    countEl.textContent = 0
}