var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align","right");

//create the elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

//add content
newHeading.innerHTML = "Did you know?";
newParagraph.innerHTML = "California produces over 17 million gallons of wine each year!";

//attach the new elements to the document
document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);

