import createChatObj from './createChatObj'

test('returns a new chat Object . no existing', () => {

    const expectedObj = { 12345678 : {  "def@def.org" : "Cah I have PS1"   }  }

    //https://jestjs.io/docs/en/expect#tostrictequalvalue
    expect(createChatObj("def@def.org",12345678,"Cah I have PS1")).toStrictEqual(expectedObj)

  })

  test('returns a new chat Object. adding existing chat Object', () => {


    const existingObj = { 12345678 : {  "def@def.org" : "Cah I have PS1"   }  }

    const expectedObj = {
        
        12345678 : {  "def@def.org" : "Cah I have PS1"   } ,
        23423432 : {  "def@def.org" : "Cah I have PS1"   } 

}

    //https://jestjs.io/docs/en/expect#tostrictequalvalue
    expect(createChatObj("def@def.org",23423432,"Cah I have PS1",existingObj)).toStrictEqual(expectedObj)

  })