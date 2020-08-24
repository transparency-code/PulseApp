import createTimeStamp from './createTimeStamp'

//impure function. do not test
export default function createProjectId() {

 
  const timestamp = createTimeStamp()

  const random =  Math.floor(Math.random() * 90 + 10);
  
  const id = timestamp + random
  
  // console.log(id)

  return Number(id)
}