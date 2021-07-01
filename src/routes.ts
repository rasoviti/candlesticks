import { Router, Request, Response } from "express";
import { ShowCandlestickController } from "./controllers/ShowCandlesticksController";

const router = Router();

const showCandlestickController = new ShowCandlestickController();

router.get("/candlesticks", showCandlestickController.handle);
router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "tente a rota /candlesticks",
  })
});

export { router }