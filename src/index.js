const { getSystemInfo } = require('./commands/system-info');
const { getCpuInfo } = require('./commands/system-cpu');
const { getMemoryInfo } = require('./commands/system-memory');
const { getAllSystemInfo } = require('./commands/system-all-info');

const commands = {
    'system-info': getSystemInfo,
    'system-cpu': getCpuInfo,
    'system-memory': getMemoryInfo,
    'system-all-info': getAllSystemInfo,
};

const executeCommand = async (command) => {
    if (commands[command]) {
        return await commands[command]();
    } else {
        return 'Commande inconnue. Veuillez utiliser system-info, system-cpu, system-memory ou system-all-info.';
    }
};

// Exemple d'écoute des commandes de l'utilisateur
const userCommand = process.argv[2]; // Récupère la commande de l'utilisateur depuis les arguments de la ligne de commande
executeCommand(userCommand).then(console.log);