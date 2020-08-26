import createTimeStamp from './createTimeStamp'

//impure function. do not test
export default function createChatTimeStamp() {

 
  const timestamp = createTimeStamp()

  const random =  Math.floor(Math.random() * 9 + 1);
  
  const id = timestamp + random
  
  // console.log(id)

  return Number(id)
}