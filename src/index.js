let button;
let button2;
let button3;
let button4;

let inp;

let usedMoves = [];
let elements = [];

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
function popFront () {
    if (usedMoves == 0) {
        alert("Stack is empty ;) There is nothing to pop lol ");
        return;
    };
    if (usedMoves.length == 1) {
        push();
        noStroke();
        fill(255,255,255);
        rect(0, 599, 250, 100);   
        pop();
        usedMoves.pop();
        elements.pop();
        return;
    };
    console.log( usedMoves);
    push();
    noStroke();
    fill(255,255,255);
    rect(0, usedMoves[usedMoves.length-1]+99, 250, 100)
    pop();
    usedMoves.pop();
    elements.pop();
};


function pushValueToQueue (value) {
        if (usedMoves.length == 0) {
            push();
            fill(randomIntFromInterval(0,255),randomIntFromInterval(0,255),randomIntFromInterval(0,255));
            rect(0, 600, 250, 100);   
            pop();
            usedMoves.push(600-100);
            elements.push();
            textSize(30);
            let randomInteger = randomIntFromInterval(1,100);
            text(randomInteger,125-25,660);
            elements.push(randomInteger);
            fill(0);
            return;
        } else if (usedMoves.length == 7) {
            alert("Stack is full!")
            return;
        }
        push();
        fill(randomIntFromInterval(0,255),randomIntFromInterval(0,255),randomIntFromInterval(0,255));
        rect(0, usedMoves[usedMoves.length-1], 250, 100);   
        pop();
        push(); 
        textSize(30);
        let randomInteger = randomIntFromInterval(1,100);
        text(randomInteger,100,usedMoves[usedMoves.length-1]+52);
        fill(0);
        pop();
        usedMoves.push(usedMoves[usedMoves.length-1]-100);
        elements.push(randomInteger);
};

function setup() {
    createCanvas(400, 700);
    background(0);

    push();
    strokeWeight(5);
    stroke(255);
    rect(0, 0, 250, 700);
    pop();
    push();
    rect(250, 0, 250, 700);
    pop();
    button = createButton('push');
    button2 = createButton('pop');
    button3 = createButton('top');
    button4 = createButton('clear');
}

function draw () {
    button.mousePressed(pushValueToQueue);
    button2.mousePressed(popFront)
    button3.mousePressed(() => {
        if (usedMoves.length == 0) {
            alert("Stack is empty :/");
            return;
        } 
        alert("Top of the stack is: " + elements[elements.length-1]);
    })
    button4.mousePressed(() => {
        elements = [];
        usedMoves = [];
        push();
        stroke(100);
        fill(255);
        rect(0, 0, 250, 700);
        pop();
    });
};


