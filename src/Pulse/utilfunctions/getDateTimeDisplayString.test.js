import getDateTimeDisplayString from './getDateTimeDisplayString'

test('get Date and Time String', () => {

    const testIdString = '20082110241'

    const resultString = '21-08-20 10.24 am'


    expect(getDateTimeDisplayString(testIdString)).toMatch(resultString)
  });
