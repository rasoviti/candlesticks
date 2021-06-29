import axios from "axios"

const api = axios.create({
  baseURL: "https://poloniex.com/public?command=returnTicker"
})

module.exports = api;