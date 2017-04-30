const Dropbox = require('dropbox');
const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
dotenv.load()

var dbx = new Dropbox({accessToken: process.env.DROPBOX_ACCESS})
var userPath = process.argv.slice(2)[0]
var dropboxPath = process.argv.slice(3)[0];

fs.readdir(userPath, (err, files) => {

	dbx.filesListFolder({path: dropboxPath})
	.then(res => {
		files.forEach(file => {
			fs.readFile(path.join(userPath, file), (err, contents) => {
				if(err) {
					console.log(err);
					return;
				}

				dbx.filesUpload({path: path.join(dropboxPath, file), contents: contents})
				.then((response)  => {
					console.log(response)
				})
				.catch( (err) => {
					console.log(err)
					return;
				})

			})
		})

	})
	.catch(err =>{
		console.log(err)
	})
})