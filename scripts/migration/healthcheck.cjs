const http = require('node:http');
const request = http.get({host:'127.0.0.1',port:process.env.PORT || 3000,path:'/'}, response => {
  response.resume();
  process.exitCode = response.statusCode === 200 ? 0 : 1;
});
request.setTimeout(8000, () => request.destroy(new Error('health timeout')));
request.on('error', () => {process.exitCode = 1;});
