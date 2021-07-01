import { Request, Response } from "express";
import { CreateCandlestickService } from "../services/CreateCandlestickService";

const api = require("../api/poloniex");

class ShowCandlestickController {
  async handle(request: Request, response: Response) {
    let i = 0;
    let moeda = 'BTC_BTS';
    
    if(request.query.moeda != undefined) {
      moeda = request.query.moeda.toString();
    }
    
    let date = new Date();
    let { data } = await api.get();

    if(data[moeda] == undefined){
      return response.status(400).json({
        error: "Não foi possível obter dados da moeda solicitada! Por favor, entre com uma moeda válida...",
      })
    }

    let candlestick_one = {
      moeda: moeda,
      periodicidade: '1',
      datetime: date,
      open: data[moeda]['last'],
      low: data[moeda]['lowestAsk'],
      high: data[moeda]['highestBid'],
      close: data[moeda]['last'],
    };
    
    let candlestick_five = {
      moeda: moeda,
      periodicidade: '5',
      datetime: date,
      open: data[moeda]['last'],
      low: data[moeda]['lowestAsk'],
      high: data[moeda]['highestBid'],
      close: data[moeda]['last'],
    };

    let candlestick_ten = {
      moeda: moeda,
      periodicidade: '10',
      datetime: date,
      open: data[moeda]['last'],
      low: data[moeda]['lowestAsk'],
      high: data[moeda]['highestBid'],
      close: data[moeda]['last'],
    };

    const interval = setInterval(async function repeatAPI() {
      try {
        i++;
        date = new Date();
        let { data } = await api.get();

        candlestick_one['datetime'] = date;
        candlestick_one['open'] = candlestick_one['close'];
        candlestick_one['low'] = data[moeda]['lowestAsk'];
        candlestick_one['high'] =  data[moeda]['highestBid'];
        candlestick_one['close'] = data[moeda]['last'];
        const createCandlestickService = new CreateCandlestickService();
        await createCandlestickService.execute(candlestick_one);

        if(i%5 == 0){
          candlestick_five['datetime'] = date;
          candlestick_five['open'] = candlestick_five['close'];
          candlestick_five['low'] = data[moeda]['lowestAsk'];
          candlestick_five['high'] =  data[moeda]['highestBid'];
          candlestick_five['close'] = data[moeda]['last'];
          await createCandlestickService.execute(candlestick_five);
        }

        if(i%10 == 0){
          candlestick_ten['datetime'] = date;
          candlestick_ten['open'] = candlestick_ten['close'];
          candlestick_ten['low'] = data[moeda]['lowestAsk'];
          candlestick_ten['high'] =  data[moeda]['highestBid'];
          candlestick_ten['close'] = data[moeda]['last'];
          await createCandlestickService.execute(candlestick_ten);
        }
      } catch (error) {
        clearInterval(interval);
        return response.status(400).json({
          error: error.message,
        })
      }
    }, 60000);
  }
}

export { ShowCandlestickController }