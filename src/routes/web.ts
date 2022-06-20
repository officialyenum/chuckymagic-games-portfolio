import { Router } from "express";
import IndexController from "../controllers/index.controller";

const router = Router();

router.get("/", IndexController.index);
router.get("/games", IndexController.games);
router.get("/about", IndexController.about);
router.get("/tilevania", IndexController.tilevania);
router.get("/laserdefender", IndexController.laserdefender);

export default router;