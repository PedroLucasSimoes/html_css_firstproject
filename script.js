function switchScreens(url) {
				window.location.href=url
}

function verifyLogin() {
				var user = {
								
				
           name:document.getElementById("name").value,
           password:document.getElementById("password").value
				    };
				    
				if (user.name && user.password) {
								console.log(user.name, user.password)
								switchScreens("main_logged_screen.html")
				} else {
								console.log("tá null????")
				}
				
				
}

function loginButtonClick() {
				
				verifyLogin()
				
				
				
				
				

}
