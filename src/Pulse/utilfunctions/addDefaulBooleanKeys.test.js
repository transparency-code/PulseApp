import addDefaultBooleanKeys from './addDefaultBooleanKeys'

test('add default keys to data item from dynamoDB . case 1 . all default keys missing', () => {

    const defaultBooleans = {
        lined: false,
        calcRequired: false,
        openAwning: false,
        enclosedAwning: false,
        garaport: false,
        lintelDesign: false,
        buildingEnvelope: false,
      };

    expect(addDefaultBooleanKeys({})).toEqual(defaultBooleans)
  });

  test('add default keys to data item from dynamoDB . case 2. one key  existing in data', () => {

    const data = {
        enclosedAwning: true,
      };

      const defaultBooleans = {
        lined: false,
        calcRequired: false,
        openAwning: false,
        //existiing key
        enclosedAwning: true,
        garaport: false,
        lintelDesign: false,
        buildingEnvelope: false,
      };

    expect(addDefaultBooleanKeys(data)).toEqual(defaultBooleans)
  });