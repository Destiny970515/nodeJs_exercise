const fs = require('fs');
exports.getMime = function(extname) {
  switch(extname) {
    case ".css" :
      return 'text/css'
    case ".js" :
      return 'text/javascript'
    default:
      return 'text/html'
  }
}
exports.getFileMime = function(extname) {
  return new Promise((res, rej) => {
    fs.readFile('./data/mime.json', (err, data) => {
      if (err) {
        rej(err);
      }
      let mime = JSON.parse(data.toString());
      res(mime[extname]);
    })
  })
  
}