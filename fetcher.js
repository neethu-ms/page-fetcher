const request = require('request');
const fs = require('fs');

const downloader = function(args) {
  request(args[0], (error, response, body) => {
    if (!error && response.statusCode === 200) {
      fs.writeFile(args[1],body,() =>{
        console.log("Downloaded and saved " + response.headers["content-length"] + " bytes to ./index.html.");
      });
    } else {
      console.log(error);
    }
  });
};

downloader(process.argv.slice(2));
