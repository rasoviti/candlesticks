# Candlesticks using Poloniex

## O que é

Dados os preços de execução (cotações) de uma criptomoeda reportados em tempo real através de uma API pública, este sistema processa estas cotações, agrega-as em candlesticks (com os dados de abertura, máxima, mínima e fechamento) e salva estes candles em um banco de dados.


## Detalhes técnicos

- Linguagem de programação: Typescript - Node.js  
- Editor de código: Visual Studio Code
- API consumida: Poloniex Public API (comando returnTicker)
- Banco de dados: mysql
- Docker


## Reprodução

1. Instale o docker e o docker-compose (Pule este passo caso já tenha na sua máquina)

2. Clone o repositório
```sh
  git clone https://github.com/rasoviti/candlesticks.git
```
3. Execute docker-compose na pasta:
```sh
  docker-compose up
```

### Rodar localmente:

1. Instale o Node.js (Pule este passo caso já tenha na sua máquina)

2. Clone repositório e abra o projeto no seu ambiente de desenvolvimento
3. Instale as dependencias 
```sh
  npm install
```
4. Rode o script de criação de banco de dados [file: init.sql]
5. Altere os dados "host", "port", "username" e"password" no arquivo "ormconfig.json" para os da sua conexão com o BD
6. Rode a migration de criação da tabela:
```sh
  npm dev typeorm migration:run
```
7. Rode o server:
```sh
  npm run dev
```

## Funcionamento
- É possível iniciar a operação através de duas rotas:
```sh
  localhost:3000/candlesticks
```
e
```sh
  localhost:3000/candlesticks?moeda={criptocurrency}
```
- Na primeira rota, a moeda considerada é a 'BTC_BTS'. Na segunda, a moeda é escolhida pelo usuário podendo ser qualquer uma das moedas cujos dados são disponibilizados pela API utilizada. Para isso, basta substituir {criptocurrency} pelo código da moeda desejada. (Neste [link](https://docs.google.com/document/d/193RuQ3mdGMytthC_rx6cq3O5hBJx6NKnXlJYxMHq3Ys/edit?usp=sharing) temos a lista das moedas disponiveis no dia 31/06/2021)

- O processamento é feito enquanto o servidor estiver rodando ou não ocorre nenhuma falha.

- O usúario é informado assim  que uma falha acontece, caso contrário, a requisição fica aberta enquanto o processo é feito.

- Os candles de 1min, 5min e 10 min são gerados simultaneamente.


## Dificuldades e Relato
- A falta de experiência com o Docker foi um dificultador. O container node foi tranquila de fazer mas tive alguns problemas com a do mysql. Dado estes problemas, não é possível ver o sistema funcionando pelo docker.
- Durante o desenvolvimento muitas habilidades foram desenvolvidas e muito conhecimento agregado.

## Implementações Futuras
- Corrigir container do docker para que a aplicação rode corretamente lá.
- Retornar informações do status do processo ao usuário. 
- Adicionar mais funcionalidades ao sistema e realizar testes unitários e de integração.
