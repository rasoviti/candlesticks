import { Router } from "express";
import { CreateCandlestickController } from "./controllers/CreateCandlestickController";

const router = Router();

const createCandlestickController = new CreateCandlestickController();

router.post("/candlesticks", createCandlestickController.handle)

export { router }