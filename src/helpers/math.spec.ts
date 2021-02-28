import { sum } from './math'

describe('math', () => {
  test('sum', () => {
    const result = sum(2, 3)

    expect(result).toBe(5)
  })
})
