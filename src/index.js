"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typedi_1 = require("typedi");
const MulticastService_1 = require("./services/MulticastService");
const route_1 = require("./route");
const config_1 = require("./config");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    typedi_1.Container.set(MulticastService_1.MulticastService, new MulticastService_1.MulticastService(config_1.config.multicastAddress, config_1.config.port));
    const multicastService = typedi_1.Container.get(MulticastService_1.MulticastService);
    multicastService.handleMessage((message) => {
        route_1.routes.processMessage(message);
    });
    multicastService.sendMessage({ type: 'get', label: "hello", data: 'Request data' });
});
main().catch((err) => {
    console.error('Application failed to start', err);
});
