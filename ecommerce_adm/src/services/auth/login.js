const User = require('./../../schemas/user')

module.exports = (req, res) => {
	User
		.find({})
		.then((users) => {
			
			if(!users.length) {
				const newUser = new User()
				newUser.email = 'admin@admin.com'
				newUser.password = '1234'

				User.register(newUser, newUser.password, (error, user) => {
					if (error) {
						console.log(error)
						return res.redirect('/error')
					}

					return res.render('user/show', {
						title: 'user',
						layout: 'layouts/main',
						user: req.user || undefined	,
						data: user
					})
				})
			}
		})
	User.authenticate()(req.body.email, req.body.password, (error, user, opts) => {

		if (error || user == false) {
			return res.redirect('/auth')
		}

		return req.login(user, (error) => {
			if (error) {
				return res.redirect('/auth')
			}

			return res.redirect('/')
		})
	})	
}