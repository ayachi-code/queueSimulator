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
  
class Stack {
    constructor(size) {
        this.data = [];
        this.size = size;
    };
    pushFront (value) {
        this.data.push(value);
    };
    popFront () {
        this.data.shift();
    };
    front () {
        return this.data[0];
    }
    back () {
        return this.data[this.data.length - 1]
    }
};


function setup() {
    createCanvas(1000, 200);
    background(0);

    push();
    strokeWeight(5);
    stroke(255);
    rect(0, 100, 999, 100);
    pop();

    button = createButton('push');
    button2 = createButton('pop');
    button3 = createButton('top');
    button4 = createButton('clear');
}

function pushValueToQueue (value) {
        if (usedMoves.length == 0) {
            push();
            strokeWeight(5);
            stroke(55);
            fill(randomIntFromInterval(0,255),randomIntFromInterval(0,255),randomIntFromInterval(0,255));
            rect(0, 100, 100, 100);   
            pop();
            usedMoves.push(100);
            elements.push();
            textSize(30);
            let randomInteger = randomIntFromInterval(1,100);
            text(randomInteger,6,160);
            elements.push(randomInteger);
            fill(0);
            return;
        } else if (usedMoves.length == 10) {
            alert("Stack is full!")
            return;
        }
        push();
        strokeWeight(5);
        stroke(55);
        fill(randomIntFromInterval(0,255),randomIntFromInterval(0,255),randomIntFromInterval(0,255));
        rect(usedMoves[usedMoves.length-1], 100, 100, 100);   
        pop();
        push(); 
        textSize(30);
        let randomInteger = randomIntFromInterval(1,100);
        text(randomInteger,6+usedMoves[usedMoves.length-1],160);
        fill(0);
        pop();
        usedMoves.push(usedMoves[usedMoves.length-1]+100);
        elements.push(randomInteger);
        
};

function popFront () {
    if (usedMoves == 0) {
        alert("Stack is empty ;) There is nothing to pop lol ");
        return;
    };
    console.log(usedMoves);
    if (usedMoves.length == 1) {
        push();
        strokeWeight(5);
        stroke(255);
        fill(255,255,255);
        rect(0, 100, 100, 100)
        pop();
        usedMoves.pop();
        elements.pop();
        return;
    };
    push();
    strokeWeight(5);
    fill(255,255,255);
    stroke(255);
    console.log(usedMoves[usedMoves.length-1]);
    rect(usedMoves[usedMoves.length-1]-100, 100, 100, 100)
    pop();
    usedMoves.pop();
    elements.pop();
};

function draw () {
    button.mousePressed(pushValueToQueue);
    button2.mousePressed(popFront)
    button3.mousePressed(() => {
        alert("Top of the stack is: " + elements[elements.length-1]);
    })
    button4.mousePressed(() => {
        elements = [];
        usedMoves = [];
        push();
        strokeWeight(5);
        stroke(255);
        fill(255);
        rect(0, 100, 999, 100);
        pop();
    });
};
