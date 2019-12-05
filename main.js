let screen = document.querySelector("#screen");
let btnCreat = document.querySelector("#createNumber");
let btnCall = document.querySelector("#callNumber");
let spanNewNumber = document.querySelector("#newNumber");
let spanQueue = document.querySelector("#queue");


let n = 0;
let queue = [];
btnCreat.onclick = () => {
    n += 1;
    queue.push.call(queue, n); //queue.push(n);
    spanNewNumber.innerText = n;
    spanQueue.innerText = JSON.stringify(queue);
}

btnCall.onclick = () => {
    if (queue.length === 0) {
        alert("没有号了！");
        return;
    }
    let m = queue.shift();
    screen.innerText = `请 ${m} 号就餐`;
    spanQueue.innerText = JSON.stringify(queue);
}
