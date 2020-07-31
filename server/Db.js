var mysql = require('mysql')

module.exports = {

	async query (query) {
		const con = mysql.createConnection({
		    host: 'localhost',
		    user: 'root',
		    password: '',
		    database: 'sdata'
		})

		return new Promise((resolve, reject) => {
			con.connect((err) => {
				if (err) return reject(new Error('Error connecting to DB.'))

				con.query(query, (err, result) => {
					con.end()

					if (err) return reject(new Error('Error executing query.'))

					return resolve(result)
				})
			})	
		})
	}

}