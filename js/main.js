// username 
var username = document.getElementById("username");
// comment
var comment = document.getElementById("comment");
// 
function appendComment() {
	var newDiv = document.createElement("div");
	var newH2 = document.createElement("h2");
	var newP = document.createElement("p");
	newDiv.appendChild(newH2);
	newDiv.appendChild(newP);
	newH2.innerText = "Username: " + username.value;
	newP.innerText = "Comment: " + comment.value;
	document.body.appendChild(newDiv);

// The more efficient way to write the code above
	// var newDiv = document.createElement("div");
	// newDiv.innerHTML = "<h1>Username: " + username.value + "</h1><p>Comment: " + comment.value + "</p>";
	// document.body.appendChild(newDiv);
}