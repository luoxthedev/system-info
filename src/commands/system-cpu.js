const os = require('os');

const getCpuInfo = () => {
    return os.cpus();
};

module.exports = { getCpuInfo };