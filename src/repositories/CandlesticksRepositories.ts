import { EntityRepository, Repository } from "typeorm"
import { Candlestick } from "../entities/Candlestick";

@EntityRepository(Candlestick)
class CandlestickRepositories extends Repository<Candlestick>{

}

export { CandlestickRepositories }