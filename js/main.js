// array of objects to store existing user data
body = document.querySelector("body");
body.style.backgroundImage = "url('../img/questionmark.jpg')"

var existingUsers = [
	{
		user: "phone",
		pass: "mississippi"
	},
	{
		user: "user",
		pass: "password"
	}
]


// function to determine if the user exists and the password matchs that user, function fires on user clicking button line 28 index.html
function login() {
	// store the tag with id="sign" in var username
	var username = document.getElementById("username")
	// store the tag with id="sign" in var password
	var password = document.getElementById("password")
	// store the tag with id="results" in var results
	var results = document.getElementById('results')

	// confirm the element exists and then what value the user submits
	console.log(username, password, results)
	console.log("username value is: " + username.value)
	console.log("password value is: " + password.value)
	
	// loop through existing users array one item at a time 
	for(i = 0; i < existingUsers.length; i = i + 1) {
		// check each user as you loop through the array of objects
		console.log(existingUsers[i])
		if(username.value.toLowerCase() === existingUsers[i].user && password.value.toLowerCase() === existingUsers[i].pass) {
			// check to see if the IF statement code block executed
			body = document.querySelector("body");

		//function bgImage (element,background) {
   			body.style.backgroundImage = "url('/../img/answer.jpg')";
		//}

			console.log("if statement ran, so we have a match!")
   			// change class of results to let the user know it worked 
			results.className = 'success'
			// update the text of the results element to display a success message
			results.textContent = "Congratulations you are very smart! "

			// stop the function from running any further cause we got a match!!!
			return
		} 
	}
	
	// run failure if username and password didn't match
	console.log("Wrong answers")
	body = document.querySelector("body");
	//function bgImage (element,background) {
   		body.style.backgroundImage = "url('/../img/fail.png')";
	//}
	// bgImage (body,"../img/fail.png");
	// change class of results to let the user know it failed
	results.className = 'failure'
	// update the text of the results element to display a failure message
	results.textContent = "Those are not the correct answers!"
}