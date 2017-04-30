This is a Node.JS script to upload files to DropBox using the command line. I run the program as part of my crontab to autoupdate my files to my DropBox account.

# How To

`node dropbox-update.js /source/path /destination/path`

The program takes all files listed in the source path and uploads it to the destination path in DropBox.

# Requirements

Requires a dropbox access token. Token can be placed into a .env file under `DROPBOX_ACCESS`. See .env.sample