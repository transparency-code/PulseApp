import {removeKeysWithNull} from './misc'

test('remove a key with null from object', () => {
    const testObj = {
        a : "a",
        b : "",
        c : "c"
    }

    const resultObj = {
        a:"a",
        c:"c"
    }

    expect(removeKeysWithNull(testObj)).toEqual(resultObj)
  });