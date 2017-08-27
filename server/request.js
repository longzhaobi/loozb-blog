const axios = require('axios');

const dev = !(process.env.NODE_ENV === 'production')

let options = {};
console.log(dev)
if(dev) {
  options.baseURL = 'http://api.loozb.com'
} else {
  options.baseURL = 'http://api.loozb.com'
}
module.exports = axios.create(options)
