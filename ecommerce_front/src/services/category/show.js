const Product = require('./../../schemas/product')
const Category = require('./../../schemas/category')

module.exports = (req, res) => {
	Category
		.find({
			slug: req.params.slug
		})
		.then((category) => {
			Product
				.find({
					enable: true,
					category
				})
				.then((products) => {

					return res.render('category/show', {
						title: 'Category',
						layout: 'layouts/main',
						user: req.user || undefined,
						products	
					})
				})
				.catch((error) => {

				})
		})
		.catch((error) => {

		})
	
}