//Two methods for timers - setTimeout and setInterval (simgle/repeating)

//simple timeout
//function simpleMessage() {
//	alert("This is just an alert box")
//}
//setTimeout(simpleMessage,5000);

//slideshow
var myImage = document.getElementById("mainImage");
var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds
var intervalHandle = setInterval(changeImage,5000);

myImage.onclick = function() {
	clearInterval(intervalHandle);
}



var currentPos = 0;
var intervalHandle;

function beginAnimate() {
	document.getElementById("join").style.position = "absolute";
	document.getElementById("join").style.left = "0px";
    document.getElementById("join").style.top = "100px";
    // cause the animateBox function to be called
    intervalHandle = setInterval(animateBox,50);
}

function animateBox() {
    // set new position
    currentPos+=5;
    document.getElementById("join").style.left = currentPos + "px";
    // 
    if ( currentPos > 900) {
        // clear interval
        clearInterval(intervalHandle);
        // reset custom inline styles
        document.getElementById("join").style.position = "";
        document.getElementById("join").style.left = "";
        document.getElementById("join").style.top = "";
    }
}

window.onload =  function() {
	setTimeout(beginAnimate,5000);
};