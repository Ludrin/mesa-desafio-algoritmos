const System = require('./system');

const system = new System();

// O sistema é representado por um nome (único) e suas dependências.
system.addModule('0', []);
system.addModule('1', []);
system.addModule('2', ['1']);
system.addModule('3', ['0']);
system.addModule('4', []);
system.addModule('5', ['3']);
system.addModule('6', ['2', '4', '5']);
system.addModule('7', ['5', '6']);

const initializationOrder = system.initializationOrder();
console.log('Ordem de inicialização: ', initializationOrder);
