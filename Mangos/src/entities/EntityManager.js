export default class EntityManager {
    constructor() {
        this.entities = [];
    }

    add(entity) {
        this.entities.push(entity);
        entity.start();
        return entity;
    }

    remove(entity) {
        const index = this.entities.indexOf(entity);
        if (index !== -1) {
            this.entities.splice(index, 1);
            entity.destroy();
        }
    }

    update(deltaTime, ...args) {
        // Filter out inactive entities and update active ones
        this.entities = this.entities.filter(entity => entity.active);
        for (const entity of this.entities) {
            entity.update(deltaTime, ...args);
        }
    }

    getByName(name) {
        return this.entities.find(entity => entity.name === name);
    }

    getByType(typeClass) {
        return this.entities.filter(entity => entity instanceof typeClass);
    }

    clear() {
        for (const entity of this.entities) {
            entity.destroy();
        }
        this.entities = [];
    }
}

export const entityManager = new EntityManager();
