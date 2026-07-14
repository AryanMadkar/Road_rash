export default class Entity {
    constructor(name = "Entity") {
        this.name = name;
        this.active = true;
        this.position = { x: 0, y: 0, z: 0 };
        this.yaw = 0; // rotation around Y axis in radians
    }
    start() {

    }
    update(deltaTime) {

    }
    destroy() {
        this.active = false;
    }
}