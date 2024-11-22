export default {
	loginBtnClick () {
		const user = {username: emailTxt.text, password: passwordTxt.text}
		checkUserExistence.run({username: user.username}).then((data) => {
			if(data.length <= 0) {
				showAlert("Username not exist!", 'error')
			} else {
				dcodeIO.bcrypt.compare(user.password, data[0].password)
					.then((isMatch) => {
					dcodeIO.bcrypt.compare
					if(!isMatch) {
						showAlert("Username or password not correct!", 'error')
					} else {
						delete data[0].password
						Protector.generateToken(data[0]).then((tokens) => {
							storeValue("crm_user", {...data[0], token: tokens})
						})
						// navigateTo('adminPage')
					}
				})
			}
		})

	}
}