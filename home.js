//sets content alignment right
var mainContent = document.getElementById("mainContent");
mainContent.setAttribute("align","right");

//rotates content
var messageArray = ["The true heart of California","Tours as diverse as California itself","Explore our world your way"];
var messageIndex = 0;

function deeperFunction() {
	// perform loop
	for (var i = 0; i < 500; i++) {
		// do stuff.
		var foo = i * (Math.random());
		var bar = foo;
		// more exciting code.
	}
}

function simpleFunction() {
	// jump into a deeper function
	deeperFunction();
	// now grab the message and change it.
	var newMessage = messageArray[messageIndex];
	var messageElement = document.getElementById("mainMessage");
	messageElement.innerHTML = newMessage;
	messageIndex++;
	if (messageIndex >= messageArray.length) {
		messageIndex = 0;
	}
}

function changeMessage() {
	simpleFunction();
}

// prevent a form from submitting
function preparePage() {
	document.getElementById("mainContent").onclick = function() {
        if ( document.getElementById("mainContent").className == "example") {
             document.getElementById("mainContent").className = "";
        } else {
           document.getElementById("mainContent").className = "example";
        }
	}
}

window.onload = function() {
	setInterval(changeMessage,4000);
	preparePage()
};

