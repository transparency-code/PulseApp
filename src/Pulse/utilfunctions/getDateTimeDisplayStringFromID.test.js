import getDateTimeDisplayStringFromID from './getDateTImeDisplayStringFromID'

test('get Date string - test pm time', () => {

    const testIdString = '20082120241'

    const resultString = '21-08-20 8:24 pm'


    expect(getDateTimeDisplayStringFromID(testIdString)).toEqual(resultString)
  });


  
test('get Date string - test am time', () => {

  const testIdString = '20082120241'

  const resultString = '21-08-20 8:24 pm'


  expect(getDateTimeDisplayStringFromID(testIdString)).toEqual(resultString)
});