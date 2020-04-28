

//impure function
export default function createProjectId() {

  //https://usefulangle.com/post/187/nodejs-get-date-time


  const date_ob = new Date();

  const year4digit = date_ob.getFullYear().toString()

  const year2digit = year4digit.slice(-2)

  const hours = date_ob.getHours();

  const month = ("0" + (date_ob.getMonth() + 1)).slice(-2)

  const minutes = ("0" + date_ob.getMinutes()).slice(-2)

  const date = ("0" + date_ob.getDate()).slice(-2);

  const seconds = ("0" + date_ob.getSeconds()).slice(-2);

  //https://stackoverflow.com/questions/15735159/javascript-generate-a-two-digits-positive-random-number
  const random =  Math.floor(Math.random() * 90 + 10);
  
  const id = year2digit + month + date + hours + minutes + seconds + random
  
  // console.log(id)

  return Number(id)
}


//https://stackoverflow.com/questions/37072341/how-to-use-auto-increment-for-primary-key-id-in-dynamodb
//build to scale across many partitions/shards/servers.
// DynamoDB does not support auto-increment primary keys due to scaling limitations and cannot be guaranteed across multiple servers.

