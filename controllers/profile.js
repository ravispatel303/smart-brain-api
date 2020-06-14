const handleProfileGet = (req, res, db) => {
	const { id } = req.params;
	// db.select('*').from('users').where({
	// 	id: id
	// })
	// using ES6 we can reduce code to below from above
	db.select('*').from('users').where({id})
		.then(user => {
			if(user.length){
				res.json(user[0]);				
			} else {
				res.status(400).json('Not Found')
			}
		})
		.catch(err => res.status(400).json('error getting user'))
}

module.exports = {
	handleProfileGet: handleProfileGet
}