# README

* Similar to the Linux command of ls - This app will create a command line using Node
* Using the Node.js standard library documentation
* Get access to the file system module inside of the project.
* If no arguments - Print out the files and folders in the current directory
* Using a path as an argument - Print out files and folder in relative or absolute path
* readdir(). Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.
* The process.cwd() method returns the current working directory of the Node.js process.
* Create the package.json file with 'bin' section - npm init -y
* Change index.js file permissions
* Add comment to index.js file to allow it to be treated as an executable. - $ chmod +x index.js
* Link the project
* Determine if file or folder using fs.lstat

OPTIONS:
* Maintain an array of the results from each lstat. As each callback is invoked, add the stats object to this array. When array is full, log everything in - Works but not ideal!
* Wrap the lstat call with a promise, use async/await syntax to process lstat call one at a time.
* Wrap the lstat call with a promise, use async/await + the Promise.all helper method to process lstat calls all at once.  THIS IS THE RIGHT WAY
