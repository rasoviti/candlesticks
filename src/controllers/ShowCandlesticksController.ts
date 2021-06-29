import { Request, Response } from "express"

const api = require("../api/poloniex");

class ShowCandlestickController {

  async handle(request: Request, response: Response) {
    try {
      const { data } = await api.get();
      return response.send(JSON.stringify(data))
    } catch (error) {
      response.send({ error: error.message })
    }
  }
}

export { ShowCandlestickController }