import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCandlesticks1624930712534 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.createTable(
            new Table({
                name: "candlesticks",
                columns:[
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: "moeda",
                        type: "varchar(50)",
                    },
                    {
                        name: "periodicidade",
                        type: "varchar(15)",
                    },
                    {
                        name: "datetime",
                        type: "timestamp"
                    },
                    {
                        name: "open",
                        type: "double",
                    },
                    {
                        name: "low",
                        type: "double",
                    },
                    {
                        name: "high",
                        type: "double",
                    },
                    {
                        name: "close",
                        type: "double",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("candlesticks");
    }

}
