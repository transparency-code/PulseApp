import createTimeStamp from './createTimeStamp'

//impure function. do not test
export default function createProjectId() {

 
  const timestamp = createTimeStamp()
  //console.log(timestamp)

  //https://stackoverflow.com/questions/15735159/javascript-generate-a-two-digits-positive-random-number
  const random =  Math.floor(Math.random() * 9 + 1);
  
  const id = `${timestamp}${random}`
  
 // console.log(id)

  return Number(id)
}


//https://stackoverflow.com/questions/37072341/how-to-use-auto-increment-for-primary-key-id-in-dynamodb
//build to scale across many partitions/shards/servers.
// DynamoDB does not support auto-increment primary keys due to scaling limitations and cannot be guaranteed across multiple servers.

