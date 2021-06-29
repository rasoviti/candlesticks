import { getCustomRepository } from "typeorm"
import { CandlestickRepositories } from "../repositories/CandlesticksRepositories"

interface ICandlestickRequest {
  moeda: string,
  periodicidade: string,
  datetime: Date,
  open: number,
  low: number,
  high: number,
  close: number
}

class CreateCandlestickService {
  async execute({ moeda, periodicidade, datetime, open, low, high, close } : ICandlestickRequest) {
    const candlesticksRepository = getCustomRepository(CandlestickRepositories)

    const candlestick = candlesticksRepository.create({
      moeda,
      periodicidade,
      datetime,
      open,
      low,
      high,
      close
    })

    await candlesticksRepository.save(candlestick)

    return candlestick
  }
}

export { CreateCandlestickService }