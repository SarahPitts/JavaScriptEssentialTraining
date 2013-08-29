// handle the form submit event
function prepareEventHandlers() {
	document.getElementById("frmContact").onsubmit = function() {
		// prevent a form from submitting if no email.
		if (document.getElementById("email").value == "") {
			document.getElementById("errorMessage").innerHTML = "Please provide at least an email address!";
			// to STOP the form from submitting
			return false;
		} else {
			// reset and allow the form to submit
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
}

// when the document loads
window.onload =  function() {
	prepareEventHandlers();
};



// show and hide sections of a form
function preparePage() {
	document.getElementById("brochures").onclick = function() {
		if (document.getElementById("brochures").checked) {
			// use CSS style to show it
			document.getElementById("tourSelection").style.display = "block";
		} else {
			// hide the div
			document.getElementById("tourSelection").style.display = "none";
		}
	};
	// now hide it on the initial page load.
	document.getElementById("tourSelection").style.display = "none";
}

window.onload =  function() {
	preparePage();
};