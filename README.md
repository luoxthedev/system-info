# System Info

Ce projet est un package Node.js nommé `system-info` qui permet de récolter des informations sur le système. Il fournit plusieurs commandes pour obtenir des détails spécifiques sur le système d'exploitation, le processeur et la mémoire.

## Installation

Pour installer le package, utilisez npm :

```
npm install system-info
```

## Commandes

### `system-info`

Cette commande retourne toutes les informations système, y compris le système d'exploitation, la version, et d'autres détails pertinents.

### `system-cpu`

Cette commande récupère et retourne des informations spécifiques sur le processeur, comme le nombre de cœurs et la fréquence.

### `system-memory`

Cette commande collecte et retourne des informations sur la mémoire, y compris la mémoire totale et la mémoire utilisée.

## Utilisation

Après l'installation, vous pouvez utiliser les commandes suivantes dans votre terminal :

```bash
node src/index.js system-info
node src/index.js system-cpu
node src/index.js system-memory
```

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.

## License

Ce projet est sous licence MIT.