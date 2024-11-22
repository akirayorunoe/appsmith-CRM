export default {
	generateToken(user) {
		const secretKey = "!@#$%%$#@!#fd6150c4d5d120d29031c79c5accd3e5%$#@!!@#$%"
		return new Promise((resolve, reject) => {
			const accessToken = jsonwebtoken.sign(user, secretKey, {
				expiresIn: "15m",
			});
			const refreshToken = jsonwebtoken.sign(user, secretKey, {
				expiresIn: "7d",
			});
			resolve({ accessToken, refreshToken });
		});
	},

}