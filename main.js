// MODIFIED ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [];

// intialize myArray to have 15 300's
for (let i = 0; i < 100; i++) {
    myArray.push(300)
}

console.log("MY ARRAY: " + myArray.length)

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Logic
    let barWidth = cnv.width / myArray.length;

    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}


document.addEventListener("keydown", keydownHandler)

function keydownHandler(e) {
    console.log(e.code)
    if (e.code == "Space") {
        let randomDance = Math.random() * 5
        let toAddNum;
        let toDetermineNegative = Math.round(Math.random() * 5)
        // if less than 2, randomDance is negative. otherwise, it is positive
        toDetermineNegative <=2 ? randomDance = Number(`-${randomDance}`) : ''

        // add the random decimal created
        myArray = myArray.map(item => item + randomDance)
    }
    else if (e.code == "KeyR") {
        let arrayLength = myArray.length
        myArray = []
        for (let i = 0; i < arrayLength; i++) {
            myArray.push(300)
        }
        console.log(myArray)
    }
}