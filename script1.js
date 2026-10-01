// JavaScript
// 1. Find the button element in the DOM
const button1 = document.getElementById("btn1");

// 2. Define what happens when it is clicked
function handleClick() {
    alert("Button was clicked!");
}

// 3. Attach the click listener
button1.addEventListener("click", handleClick);
