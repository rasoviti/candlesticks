import { Request, Response } from "express"
import { CreateCandlestickService } from "../services/CreateCandlestickService";

class CreateCandlestickController {

  async handle(request: Request, response: Response) {
    const { moeda, periodicidade, datetime, open, low, high, close } = request.body;
  
    const createCandlestickService = new CreateCandlestickService();

    const candlestick = await createCandlestickService.execute({
      moeda,
      periodicidade,
      datetime,
      open,
      low,
      high,
      close
    });

    return response.json(candlestick);
  }
}

export { CreateCandlestickController }