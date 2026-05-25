// // * camelCase:
// // * Kylie-Mcneil - normal 
// // * kylieMcneil - camelCase (no spaces, capatilization idicates new word)
// function loadButton (){}

// // if/else + console 
// //LIsten for keydown on a button 
// //  open browser conseol on chrome:
// // cmd/ctrl + shift + i 

// // print hello into the console 
// console.log ('heyyyo')
// // assign vale to the lew variable 
// let cooler = 4
// // how to print cooler in the console
// console.log (cooler)
// // I only want to print cooler if it equals 6
// // make it a statement 
// // check if cooler is equal to 4
// if (cooler == 6){ 
//     // if cooler (=4) is equal to 6 do this/show this text
//     // this here is do a thing, if cooler is equal to four show the text: it is equal to four.
//     console.log('cooler is equal to 4')
// }
// else{
// // if cooler (=4) is not equal to 6 show this text
// console.log ('cooler is not equal to 6')
// }

// if (cooler > 2){
//     console.log('cooler is bigger then 2') 
// }

// // add an event listener 
// // attatch the keydown event to it 
// // listen for which key

// // attatch the event listener to the document (HTML page)
// // listening specifically to the keydown event

// // create a little counter 
// let counter = 0

// document.addEventListener ('keydown', (event) => { 
//     // print the data from the keydown
// console.log (event.key)
// // if the key we pressed is spacebar 
// if (event.key == ' '){
// // but only print yay if counter = four 
// if(counter ==4){
// console.log('yaaay')
// }

// // add one to our counter value 
// counter = counter + 1
// console.log(counter)

// // new condition: 

// }
// })


// // this esctially does the math four you 

// // _____________________________________________________


// // Select the button from the HTML
// const btn = document.getElementById('myButton');

// // Add a 'click' event listener
// btn.addEventListener('click', function() {
//     // Change the background color to green
//     btn.style.backgroundColor = "red";
// });

// // __________________

// function myfirstfunction() {
//     document.querySelector("#myButton").innerHTML = "why did you click them and not me, CLICK ME YOU COWARD????"}
//     // calling the function

// // myfirstfunction()

// // add mouse click listener function
// document.querySelector("p").addEventListener("click", myfirstfunction)
   
// //  division 

// function mysecondfunction() {
//     document.querySelector("#WHOOO").innerHTML = "..."}

// document.querySelector("p").addEventListener("click", mysecondfunction)

// __________________________
// _____text_____________

function changeText() {
    document.getElementById("targetText").innerHTML = "*Francis does nothing*";
}

function Weee() {
    document.getElementById("LETSGO").innerHTML = "Ok in order to take care of your son, you must give it enough heat to continue his development! Take the slider and move it 100% to keep him warm!";
}

function batman() {
    document.getElementById("justice").innerHTML = "hmmm the Son warmer 3000 didn't really do much except make everything purple... Well we mind as well use the Son Cooler 3001"; }

function YEAH() {
    document.getElementById("mhm").innerHTML = "Welp that doesn't seem to be working either... And this pesky bird won't go away! try to catch and click him and maybe he'll finally fly away!"; }

function NOOO() {
    document.getElementById("cry").innerHTML = "Aww come on! Shoo bird Shoo!! Something is wrong with this website! Nothing seems to work! I would suggest sending a strongly worded email to the creater of the site! "; }

function loll() {
    document.getElementById("laugh").innerHTML = "Of course the complaints box doesn't work! I don't even know what to do anymore... Well atleast we still have Francis... I suggest giving him a little pet :) "; }


    function NANA() {
    document.getElementById("LALALA").innerHTML = "NOOOO YOU KILLED FRANCIS?? NOOOO! This couldn't get any worse! wait- is that a... fix everything button?? What are you waiting for press it!!!"; }

// ________________________
// ______slider____________

const slider = document.getElementById('colorSlider');
const percentageText = document.getElementById('percentage');
const lockValue = slider.max

slider.addEventListener('input', function() {
  const value = slider.value; 
  percentageText.textContent = `${value}%`;

  const purple = 128;
  const green = Math.round(128 - (128 * value));
  const blue = Math.round(128 - (.2 * value));

  // Apply the dynamic RGB color to the body
  document.body.style.backgroundColor = `rgb(${purple}, ${green}, ${blue})`;
});


// _____________________________________
// _________edited out_____________


// function anotherfunction() {
//     document.querySelector("#yooo").innerHTML = add a button here}
//     // calling the function
// function showNewButton() {
//   // Select the hidden button by its ID
//   const btn = document.getElementById("hiddenButton");
//   // Change its CSS display property from 'none' to 'inline-block' (or 'block')
//   btn.style.display = "inline-block";

// __________________
// _____

function splitImage() {
    const container = document.getElementById('imageContainer');
    const img = document.getElementById('mainImage');
    
    // Prevent clicking multiple times 
    if (container.classList.contains('exploded')) return;
    
    const rows = 4;
    const cols = 4;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const pieceWidth = width / cols;
    const pieceHeight = height / rows;

    // Create container pieces
    container.classList.add('exploded');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // Clear original image
    container.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const piece = document.createElement('div');
            piece.classList.add('piece');
            
            // Set CSS variables to help with animating individual directions
            piece.style.setProperty('--x', j - Math.floor(cols / 2));
            piece.style.setProperty('--y', i - Math.floor(rows / 2));
            
            // Calculate exact crop location for the background (the secret to splitting)
            const xPos = -j * pieceWidth;
            const yPos = -i * pieceHeight;
            piece.style.backgroundImage = `url(${EGG.png})`;
            piece.style.backgroundPosition = `${xPos}px ${yPos}px`;
            
            container.appendChild(piece);
        }
    }
}

// _________________

const img = document.getElementById('runaway-img');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Get the image's current position and center point
    const rect = img.getBoundingClientRect();
    const imgX = rect.left + rect.width / 2;
    const imgY = rect.top + rect.height / 2;

    // Calculate distance between mouse and image center
    const distance = Math.hypot(mouseX - imgX, mouseY - imgY);

    // If mouse is closer than 150 pixels, move the image
    if (distance < 150) {
        // Calculate angle to move away from the mouse
        const angle = Math.atan2(mouseY - imgY, mouseX - imgX);
        
        // Move image 100px in the opposite direction
        const moveDistance = 100;
        let newX = rect.left - Math.cos(angle) * moveDistance;
        let newY = rect.top - Math.sin(angle) * moveDistance;

        // Boundary checks: Keep image inside the viewport
        newX = Math.max(0, Math.min(window.innerWidth - rect.width, newX));
        newY = Math.max(0, Math.min(window.innerHeight - rect.height, newY));

        img.style.left = `${newX}px`;
        img.style.top = `${newY}px`;
        img.style.transform = 'none'; // Overwrite the initial center transform
    }
});

// ______________________________
// ________submition box________

const myForm = document.getElementById('myForm');
const message = document.getElementById('message');

myForm.addEventListener('submit', function(event) {

  event.preventDefault(); 
  
  message.textContent = "Form failled to Send, Retry in 6 Millennia. ";
});
// ________submition box________
