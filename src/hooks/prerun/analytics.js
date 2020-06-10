const { track } = require('../../utils/telemetry')

const hook = async function(options) {
   track(options);
}

module.exports = hook;
