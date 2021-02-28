import dotenv from 'dotenv'

class Config {
  port: number
  planet: string

  constructor() {
    dotenv.config()

    this.port = Number(process.env.PORT)
    this.planet = process.env.PLANET

    // TODO: Validate all your configs and properly prevent your app from bootstrapping in an misconfigured state.
  }
}

export const config = new Config()
