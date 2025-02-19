const os = require('os');

const getSystemInfo = () => {
    return {
        platform: os.platform(),
        release: os.release(),
        version: os.version(), 
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        uptime: os.uptime(),
    };
};

module.exports = { getSystemInfo };