import getDateDisplayStringFromID from './getDateDisplayStringFromID'

test('get Date string', () => {

    const testIdString = '20081915464426'

    const resultString = '19-08-20'


    expect(getDateDisplayStringFromID(testIdString)).toMatch(resultString)
  });
