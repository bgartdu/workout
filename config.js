const fs = require('fs');
const DEV = fs.existsSync(".dev");
const config = {
    port: !DEV ? process.env.PORT : 3000,
    db: {
        url: "localhost:27017/workoutTracker",
    },
};


const REMOTE = "{{user}}:{{password}}@{{host}}/{{dbname}}?retryWrites=true&w=majority"
if (!DEV){
	config.db = {
		user: process.env.ATDB_USERNAME,
		password: process.env.ATDB_PASSWORD,
		host: process.env.ATDB_HOST,
		dbname: process.env.ATDB_DBNAME,
	}
	// config.db.url = REMOTE  start here
}

module.exports = config
