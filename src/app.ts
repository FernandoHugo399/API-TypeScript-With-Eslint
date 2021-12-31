import express from 'express'
import Controller from './controls/IndexController'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
    }

    private routes (): void {
      this.express.use('/', Controller.index)
    }
}

export default new App().express
