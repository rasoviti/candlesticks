import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("candlesticks")
class Candlestick {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  moeda: string;

  @Column({ length: 15 })
  periodicidade: string;

  @Column()
  datetime: Date;

  @Column()
  open: number;

  @Column()
  low: number;

  @Column()
  high: number;

  @Column()
  close: number;
}

export { Candlestick };