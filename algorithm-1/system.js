/**
 * Classe que implementa um sistema com suas dependências.
 */
class System {
    constructor() {
        this.modules = {};
    }

    addModule = function (name, dependencies) {
        this.modules[name] = dependencies;
    };

    getModulesQtd() {
        return Object.keys(this.modules).length;
    };

    // Busca os módulos iniciais sem nenhuma dependência
    getModulesWithoutDependencies() {
        let initialModules = [];

        for (const key in this.modules) {
            const dependencies = this.modules[key];
            if (!dependencies || dependencies.length === 0) {
                initialModules.push(key);
            }
        }

        return initialModules;
    };

    areAllDependenciesInitialized(firstModules, dependencies) {
        const differentDependencies = dependencies.filter(dependency => !firstModules.includes(dependency));
        return differentDependencies.length === 0;
    }

    initializationOrder() {
        let initOrder = [];
        initOrder.push(...this.getModulesWithoutDependencies());

        while (initOrder.length < this.getModulesQtd()) {
            for (const key in this.modules) {
                if (!initOrder.includes(key)) {

                    const dependencies = this.modules[key];
                    if (this.areAllDependenciesInitialized(initOrder, dependencies)) {
                        initOrder.push(key);
                    }
                }
            }
        }

        return initOrder;
    }
}

module.exports = System;
