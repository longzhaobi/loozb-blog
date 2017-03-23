const axios = require('axios');

const dev = !(process.env.NODE_ENV === 'production')

let options = {};

if(dev) {
  options.baseURL = 'http://localhost:8088'
} else {
  options.baseURL = 'http://139.129.226.66:8088'
}
module.exports = axios.create(options)
