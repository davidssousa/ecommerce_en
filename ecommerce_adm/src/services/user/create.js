const User = require('./../../schemas/user')

module.exports = (req, res) => {
	User.register(req.body.email, req.body.password, (error, user) => {
		if (error) {
			return res.redirect('/')
		}
		return res.redirect('/user')
	})
} 