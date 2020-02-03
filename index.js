
const fs = require('fs');


// EITHER: err === an error object, which means something went wrong or err === null, which means everything is OK
fs.readdir(process.cwd(), (err, filenames) => {
  if(err){
    console.log(err);
  }
  console.log(filenames);
});
