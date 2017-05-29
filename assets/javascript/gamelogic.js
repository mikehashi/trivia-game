


// function nextImage() {
//   //  TODO: Increment the count by 1.
//   count++;

//   // TODO: Show the loading gif in the "image-holder" div.
//   $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

//   // TODO: Use a setTimeout to run displayImage after 30 seconds??? second.
//   setTimeout(displayImage, 30000);

//   // TODO: If the count is the same as the length of the image array, reset the count to 0. IS THIS NECESSARY?
//   if (count === images.length) {
//     count = 0;
//   }
// }

// function startSlideshow() {

//   // TODO: Use showImage to hold the setInterval to run nextImage.
//   showImage = setInterval(nextImage, 30000);

// }


// function stopSlideshow() {

//   // TODO: Put our clearInterval here:
//   clearInterval(showImage);

// }

// assign 'correct' value to certain button each time...not random look at slide show func


//timer logic
var number = 30;

var correct;

$("#answer1").onclick = function () {
	correct = true;
};
var intervalId;

//links to images in array
var images = [];
//hold the setInterval when we start the slideshow
var showImage;
var count = 0;

// $("#start").click(startSlideshow);
// $("reset").click(reset);

window.onload = function() {

	$(".btn-secondary").on("click", response);
	// $("#answer1").on("click", response);
 //  	$("#answer2").on("click", response);
 //  	$("#answer3").on("click", response);
 // 	$("#answer4").on("click", response);
}

function displayImage() {
	$("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {

	count++;

//   // TODO: Show the loading gif in the "image-holder" div.
	
	$("#image-holder").html("<img src='images/kanye_avatar' width='200px'/>");

//   // TODO: Use a setTimeout to run displayImage after 30 seconds??? second.
	setTimeout(displayImage, 5000);

//   // TODO: If the count is the same as the length of the image array, reset the count to 0. IS THIS NECESSARY?
	if (count === images.length) {
		count = 0;
	}
}





function response() {
	
	stop();
	
	if (correct = true) {
		$("#response").html("Correct!");
	}

	else {
		$("#response").html("The correct answer was:");
	}

	$(".btn-secondary").html("");
	
	setTimeout(nextImage, 5000);


	
}


function run() {
      intervalId = setInterval(decrement, 1000);
      // response();
    }

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#timer").html(number + " ");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
   	$("#questions").html("Out of Time!");

   	//display image with correct answer (function)
   	correct = false;
   	response();

  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);

  //move to next questions
}


//  Execute the run function.
run();






