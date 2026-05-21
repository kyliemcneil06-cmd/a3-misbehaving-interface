// * camelCase:
// * Kylie-Mcneil - normal 
// * kylieMcneil - camelCase (no spaces, capatilization idicates new word)
function loadButton (){}

// if/else + console 
//LIsten for keydown on a button 
//  open browser conseol on chrome:
// cmd/ctrl + shift + i 

// print hello into the console 
console.log ('heyyyo')
// assign vale to the lew variable 
let cooler = 4
// how to print cooler in the console
console.log (cooler)
// I only want to print cooler if it equals 6
// make it a statement 
// check if cooler is equal to 4
if (cooler == 6){ 
    // if cooler (=4) is equal to 6 do this/show this text
    // this here is do a thing, if cooler is equal to four show the text: it is equal to four.
    console.log('cooler is equal to 4')
}
else{
// if cooler (=4) is not equal to 6 show this text
console.log ('cooler is not equal to 6')
}

if (cooler > 2){
    console.log('cooler is bigger then 2') 
}

// add an event listener 
// attatch the keydown event to it 
// listen for which key

// attatch the event listener to the document (HTML page)
// listening specifically to the keydown event

// create a little counter 
let counter = 0

document.addEventListener ('keydown', (event) => { 
    // print the data from the keydown
console.log (event.key)
// if the key we pressed is spacebar 
if (event.key == ' '){
// but only print yay if counter = four 
if(counter ==4){
console.log('yaaay')
}

// add one to our counter value 
counter = counter + 1
console.log(counter)

// new condition: 

}
})


// this esctially does the math four you 

// _____________________________________________________


// Select the button from the HTML
const btn = document.getElementById('myButton');

// Add a 'click' event listener
btn.addEventListener('click', function() {
    // Change the background color to green
    btn.style.backgroundColor = "red";
});

function myfirstfunction() {
    document.querySelector("#myButton").innerHTML = "you clicked me??"}
    // calling the function

// myfirstfunction()

// add mouse click listener function
document.querySelector("p").addEventListener("click", myfirstfunction)
   
//  division 

function mysecondfunction() {
    document.querySelector("#WHOOO").innerHTML = "YOU DID THIS"}

document.querySelector("p").addEventListener("click", mysecondfunction)






// function showNewButton() {
//   // Select the hidden button by its ID
//   const btn = document.getElementById("hiddenButton");
//   // Change its CSS display property from 'none' to 'inline-block' (or 'block')
//   btn.style.display = "inline-block";