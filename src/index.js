let button;
let button2;
let inp;

let usedMoves = [];

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
class Queue {
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
    createCanvas(1000,1000)
    background(0)
    push();
    strokeWeight(5);
    stroke(255);
    rect(0, 100, 999, 100)
    pop();
    let queue = new Queue(5);
    queue.pushFront(23);
    queue.pushFront(11);
    queue.pushFront(44);
    queue.pushFront(55);

    button = createButton('push');
    button2 = createButton('pop');
    // inp.position(0, 0);
    // inp.size(100);

};

function pushValueToQueue (value) {
        if (usedMoves.length == 0) {
            push();
            strokeWeight(5);
            stroke(55);
            fill(0,100,200);
            rect(0, 100, 100, 100);   
            pop();
            usedMoves.push(100);
            push(); 
            textSize(30);
            text(randomIntFromInterval(1,100),6,160);
            fill(0);
            pop();
            return;
        } else if (usedMoves.length == 10) {
            alert("queue is full!")
            return;
        }
        push();
        strokeWeight(5);
        stroke(55);
        fill(0,100,200);
        rect(usedMoves[usedMoves.length-1], 100, 100, 100);   
        pop();
        push(); 
        textSize(30);
        text(randomIntFromInterval(1,100),6+usedMoves[usedMoves.length-1],160);
        fill(0);
        pop();
        usedMoves.push(usedMoves[usedMoves.length-1]+100);
        
};

function popFront () {
    console.log(usedMoves);
    if (usedMoves.length == 1) {
        push();
        strokeWeight(5);
        stroke(255);
        rect(0, 100, 100, 100)
        pop();
        usedMoves.pop();
        return;
    };
    push();
    strokeWeight(5);
    stroke(255);
    console.log(usedMoves[usedMoves.length-1]);
    rect(usedMoves[usedMoves.length-1]-100, 100, 100, 100)
    pop();
    usedMoves.pop();
};


function draw () {
    push();
    textSize(32);
    text('Queue Simulator...', 468, 30);
    fill(0, 102, 153);
    pop();
    // pushValueToQueue(33);
    button.mousePressed(pushValueToQueue);
    button2.mousePressed(popFront)
    // pop();
    // push(); 
    // textSize(30);
    // text("20",6,160);
    // fill(0);
    // pop();

};