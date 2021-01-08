function confrimInfo() {
	//* naming variables// 
	var name = document.forms["mainForm"]["customerName"].value;
	var email = document.forms["mainForm"]["customerEmail"].value;
	var phone = document.forms["mainForm"]["customerPhone"].value;
	var letters = /^[A-Za-z]/
	var emailChars = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	var phoneChars = /^[0-9]{10}$/g;
	
	//* comparing the value of customerName against the value of the array containing all alphabetical characters//
	if (name = " " || !name.value.match(letters)) {
		alert("Please enter a valid name, alphabetical only!");
		document.getElementById("customerName").focus();
		return false;		
	}
	
	//* comparing the value of customerEmail against all acceptable characters and configurations for an email address//
	if (email = " " || !email.value.match(emailChars)) {
		alert("Please enter a valid email!");
		document.getElementById("customerEmail").focus();
		return false;
	}
	
	//* comparing the value of customerPhone against all valid number configurations for a phone number//
	if (phone = " " || !phone.value.match(phoneChars)) {
		alert("Please enter a valid phone number!");
		document.getElementById("customerPhone").focus();
		return false;
	}
	
	//* if the number of boxes checked is 0 an alert occurs//
	if ($('input[name=customerDay]:checked').length = 0) {
		alert("Please tell us the best day(s) to reach you!");
		document.getElementById("monday").focus();
		return false;
	}
	
	//* if the number of radio bubbles selected is 0 an alert occurs
	if ($('input[name=visited]:checked').length = 0) {
		alert("Please tell us if you have visited before!");
		document.getElementById("choice1").focus();
		return false;
	}
	
	else {
		alert("Thanks for submitting your form!")
		return false;
	}
}