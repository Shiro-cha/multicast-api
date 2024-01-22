"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
//class to create router it push the object with the label and the path
class Router {
    constructor() {
        this.routes = [];
    }
    get(label, callback) {
        this.routes.push({ label, callback, type: 'get' });
    }
    add(label, callback) {
        this.routes.push({ label, callback, type: 'add' });
    }
    getRoutes() {
        return this.routes;
    }
}
exports.Router = Router;
