"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const typedi_1 = require("typedi");
const MulticastController_1 = require("./controllers/MulticastController");
const multicastController = typedi_1.Container.get(MulticastController_1.MulticastController);
exports.routes = {
    'get': (data, label) => multicastController.get(label),
    'add': (data, label) => multicastController.add(data, label),
    processMessage: (message) => {
        const action = exports.routes[message.type];
        if (action) {
            action(message.data, message.label);
        }
    }
};
