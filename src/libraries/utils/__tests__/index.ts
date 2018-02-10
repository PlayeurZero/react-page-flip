import { classConcat } from '../'

describe('classConcat(...)', () => {
  test('it should return class with a single value', () => {
    expect(classConcat('test')).toBe('test')
  })

  test('it should return class with two values', () => {
    expect(classConcat('test', 'test2')).toBe('test test2')
  })

  test('it should return class with verified conditional value', () => {
    expect(classConcat(
      'test',
      {
        'test--verified': true,
      },
    )).toBe('test test--verified')
  })

  test('it should return class with unverified conditional value', () => {
    expect(classConcat(
      'test',
      {
        ['test--verified']: false,
      },
    )).toBe('test')
  })

  test('it should return empty string when not paramers are present or if all conditions fails', () => {
    expect(classConcat()).toBe('')
  })

  test('it should return class with multiple conditions', () => {
    expect(classConcat(
      'test',
      {
        ['test--verified1']: true,
        ['test--verified2']: true,
        ['test--verified3']: true,
      },
    )).toBe('test test--verified1 test--verified2 test--verified3')

    expect(classConcat(
      'test',
      {
        ['test--verified1']: false,
        ['test--verified2']: false,
        ['test--verified3']: false,
      },
    )).toBe('test')

    expect(classConcat(
      'test',
      {
        ['test--verified1']: true,
        ['test--verified2']: false,
        ['test--verified3']: true,
      },
    )).toBe('test test--verified1 test--verified3')
  })
})
