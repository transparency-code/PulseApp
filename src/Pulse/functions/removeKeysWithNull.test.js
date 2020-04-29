import removeKeysWithNull from './removeKeysWithNull'

test('remove a key with null from object', () => {
    const testObj = {
        a : "a",
        b : "",
        c : "c",
        d : false
    }

    const resultObj = {
        a:"a",
        c:"c"
    }

    expect(removeKeysWithNull(testObj)).toEqual(resultObj)
  });