import { Router, Request, Response } from "express";
import { ShowCandlestickController } from "./controllers/ShowCandlesticksController";

const router = Router();

const showCandlestickController = new ShowCandlestickController();

router.get("/candlesticks", showCandlestickController.handle);

export { router }