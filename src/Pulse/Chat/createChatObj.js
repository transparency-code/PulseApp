/**
 * 
 * @param {string} email 
 * @param {number} timestamp
 * @param {string} chatStr
 * @param {object} existingObj
 * pass an empty onject is no existing chatObj, ie first chat
 */
export default function createChatObj(email,timestamp, message) {
   
  //need a map of maps
  //https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes
  const chatObj = {
    timestamp,
    email,
    message
   }   

   const chatList = [chatObj]
    // const chatObj = { [timestamp] : {  [email] : chatStr   }  }

  //  console.log(chatObj)
  //   const newObj = {...existingObj, ...chatObj}
  //  console.log(newObj)
    return chatList


}

//todo 
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html#Expressions.UpdateExpressions.SET.AddingListElements
//update list