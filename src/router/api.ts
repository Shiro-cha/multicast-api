import { Router } from "./router";

const router = new Router();

router.get("hello", () => {
    console.log("he say hello");
});
router.add("hello", () => {
    console.log("he say hello from add");
});

export default router;