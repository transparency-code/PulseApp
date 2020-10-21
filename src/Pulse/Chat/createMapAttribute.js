//https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_AttributeValue.html
//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.NamingRulesDataTypes.html#HowItWorks.DataTypes
//"M": {"Name": {"S": "Joe"}, "Age": {"N": "35"}}

// UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
// ExpressionAttributeValues:{
//     ":r":5.5,
//     ":p":"Everything happens all at once.",
//     ":a":["Larry", "Moe", "Curly"]
// },



export default function createMapAttribute(email,timestamp, message) {
//list of maps. documentcliwnt will do this. use
        return [{Email : email , TimeStamp : timestamp, Message : message}]

}
