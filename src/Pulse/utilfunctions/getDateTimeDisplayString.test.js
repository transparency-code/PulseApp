import getDateTimeDisplayString from './getDateTimeDisplayString'

test.skip('get Date and Time String - test am time', () => {

    const testIdString = '20082110241'

    const resultString = '21-08-20 10:24 am'


    expect(getDateTimeDisplayString(testIdString)).toEqual(resultString)
  });


  test.skip('get Date and Time String - test am time', () => {

    const testIdString = '20082120241'

    const resultString = '21-08-20 8:24 pm'


    expect(getDateTimeDisplayString(testIdString)).toEqual(resultString)
  });
