window.addEventListener("load", function() {
	console.log("Good job opening the window");

	var video = document.getElementById("player1");

	document.getElementById("play").addEventListener("click", function() {
		console.log("Play Video");
		document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
		video.play();
   });

    document.getElementById("pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});

	document.getElementById("slower").addEventListener("click", function() {
		video.playbackRate = (video.playbackRate *.95);
		console.log(video.playbackRate);
	});

	document.getElementById("faster").addEventListener("click", function() {
		video.playbackRate = (video.playbackRate *1.05);
		console.log(video.playbackRate);
	});
	
	document.getElementById("skip").addEventListener("click", function() {
		if(video.duration < video.currentTime + 15){
			video.currentTime = 0;
		}
		else{
			video.currentTime = video.currentTime + 15;
		}
		
		console.log(video.currentTime);
		video.play();
	});

	document.getElementById("mute").addEventListener("click", function() {
		console.log('mute');
		if(document.getElementById("mute").innerHTML === "Mute"){
			video.volume = 0;
			document.getElementById("volume").innerHTML = "0%";
			document.getElementById("mute").innerHTML = "Unmute";
		}
		else{
			video.volume = document.getElementById("slider").value/100;
			document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";
			document.getElementById("mute").innerHTML = "Mute";
		}
	});

	var slider = document.getElementById("slider")
	slider.addEventListener("change", function() {
		console.log("change");
		var slider_value = slider.value;
		video.volume = slider_value/100;
		document.getElementById("volume").innerHTML = slider_value + "%";
		slider.setAttribute('value', slider_value);
	});

	document.getElementById("vintage").addEventListener("click", function() {
		video.setAttribute("class", "oldSchool");
	});

	document.getElementById("orig").addEventListener("click", function() {
		video.setAttribute("class", "video");
	});
	

});



