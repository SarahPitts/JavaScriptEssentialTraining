//create the elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

//add content
//newHeading.innerHTML = "Did you know?";
//newParagraph.innerHTML = "California produces over 17 million gallons of wine each year!";

//create child nodes manually
var h1Text = document.createTextNode("Did you know?");
var paraText = document.createTextNode("California produces over 17 million gallons of wine each year!");
//add child nodes to the new elements
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

//attach the new elements to the document
document.getElementById("trivia").appendChild(newHeading);
document.getElementById("trivia").appendChild(newParagraph);