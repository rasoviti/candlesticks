import { Router, Request, Response } from "express";
import { CreateCandlestickController } from "./controllers/CreateCandlestickController";
import { ShowCandlestickController } from "./controllers/ShowCandlesticksController";

const router = Router();

const createCandlestickController = new CreateCandlestickController();
const showCandlestickController = new ShowCandlestickController();

router.post("/candlesticks", createCandlestickController.handle);
router.get("/", showCandlestickController.handle);

export { router }