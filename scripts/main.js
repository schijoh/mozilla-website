const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

alert('Warning, this is a popup alert!!!')

// Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;