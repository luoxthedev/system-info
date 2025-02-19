const os = require('os');

const getAllSystemInfo = async () => {
    const chalk = (await import('chalk')).default;

    console.clear();

    const platform = os.platform();
    const release = os.release();
    const version = os.version();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const uptime = os.uptime();
    const cpus = os.cpus();

    return `
        ${chalk.cyan.bold('Informations Système')}
        ${chalk.cyan('──────────────────────')}
        ${chalk.green('📌 Plateforme            :')} ${chalk.yellow(platform)}
        ${chalk.green('🔄 Version               :')} ${chalk.yellow(version)}
        ${chalk.green('🚀 Release               :')} ${chalk.yellow(release)}
        ${chalk.green('💾 Mémoire Totale (RAM)  :')} ${chalk.yellow((totalMemory / (1024 ** 3)).toFixed(2) + ' GB')}
        ${chalk.green('📉 Mémoire Libre         :')} ${chalk.yellow((freeMemory / (1024 ** 3)).toFixed(2) + ' GB')}
        ${chalk.green('⏳ Uptime                :')} ${chalk.yellow((uptime / 3600).toFixed(2) + ' heures')}
        ${chalk.green('🖥️  CPU                   :')} ${chalk.yellow(cpus[0].model)}
        ${chalk.green('🧩 Nombre de Cores       :')} ${chalk.yellow(cpus.length)}
    `;
};

module.exports = { getAllSystemInfo };