# Single webpage application

this was something I've created a while back, to run locally you'll need to use the following:

-something to host the server (xampp was used)
-mysql
-nodejs

This was a project for a web development module


For the SQL side of stuff root without a password was used with the default port of 3306

Changes to Db.js may be required in order for this to work in your system if the information does not match

async query (query) {
		const con = mysql.createConnection({
		    host: 'localhost',
		    user: 'root',
		    password: '',
		    database: 'sdata'
		}
