import { config } from './config'

describe('config', () => {
  test('port', () => {
    const result = config.port

    expect(typeof result).toBe('number')
  })
})
