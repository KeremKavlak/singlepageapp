const Db = require('./Db')

module.exports = {

	async login (req, res) {
		Db.query(`
			SELECT id, name, email, api_token FROM users
			WHERE 
				email = '${escape(req.body.email)}'
				AND password = '${escape(req.body.password)}'
		`)
			.then(result => result.length !== 1 
				? res.sendStatus(403)
				: res.send(result.pop()))
			.catch(() => res.sendStatus(422))
	},

	async register (req, res) {
		// Validation?
		// if (fail) {
		// 	res.sendStatus(422)
		// }

		Db.query(`
			INSERT INTO users (name, email, password, api_token)
			VALUES (
				'${escape(req.body.name)}',
				'${escape(req.body.email)}',
				'${escape(req.body.password)}',
				'${(()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16)))()}'
			)
		`)
			.then(() => res.sendStatus(201))
			.catch(() => res.sendStatus(422))
	},

		async poststatus (req, res) {

		Db.query(`
			INSERT INTO userposts (postst)
			VALUES (
				'${escape(req.body.postst)}'
			)
		`)
			.then(() => res.sendStatus(201))
			.catch(() => res.sendStatus(422))
	},

	async user (req, res) {
		Db.query(`
			SELECT id, name, email FROM users
			WHERE 
				api_token = '${escape(req.headers.authorization )}'
		`)
			.then(result => result.length !== 1 
				? res.sendStatus(403)
				: res.send(result.pop()))
			.catch(() => res.sendStatus(422))
	},

	/*	async getstatus (req, res) {
		Db.query(`
			SELECT * FROM userposts
			
		`)
			.then(result => result.length !== 1 
				? res.send(result)
				: res.sendStatus(403))
			.catch(() => res.sendStatus(422))
	}*/

			async getstatus (req, res) {
		Db.query(`
			SELECT * FROM userposts
			
		`)
			.then(result => result.length > 0 
				? res.send(result)
				: res.sendStatus(403))
			.catch(() => res.sendStatus(422))
	},

		async searchstatus (req, res) {
		//console.log(req.query.searchpost)
		Db.query(
			'SELECT * FROM userposts WHERE postst LIKE "%'+ req.query.searchpost +'%"'
			)
			.then(result => result.length > 0 
				? res.send(result)
				: res.sendStatus(403))
			.catch(() => res.sendStatus(422))
	}

}

/**
new awi.Awi().post('http://localhost:3000/register', {	
  email: 'test@email.com',
  password: '123',
  name: 'test'
}).then(console.log) // pass
  .catch(console.log) // fail

new awi.Awi().post('http://localhost:3000/login', {	
  email: 'pavel@asd.com',
  password: 'tfksdfjkhsr734iuyr87uyt'
})
  .then(res => localStorage.token = res.body.api_token)
  .catch(console.log) // fail

const authed = () => new awi.Awi()
  .use(async req => req.headers.Authorization = localStorage.token)

authed().get('http://localhost:3000/user')
  .then(console.log) // pass
  .catch(console.log) // fail
**/
