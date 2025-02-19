const os = require('os');

const getMemoryInfo = () => {
    return {
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
    };
};

module.exports = { getMemoryInfo };