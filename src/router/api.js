"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
const router = new router_1.Router();
router.get("hello", () => {
    console.log("he say hello");
});
router.add("hello", () => {
    console.log("he say hello from add");
});
exports.default = router;
