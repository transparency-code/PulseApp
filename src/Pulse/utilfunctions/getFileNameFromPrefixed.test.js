import getFileNameFromPrefixed from './getFileNameFromPrefixed'

test('extract filename', () => {

    const atestString = "20070815314785/useruploads/Stage 1.pdf"

    const result ="Stage 1.pdf"


    expect(getFileNameFromPrefixed(atestString)).toBe(result)
  });
