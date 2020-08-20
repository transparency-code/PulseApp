import createTimeStamp from './createTimeStamp'

function createChatTime(props) {
    const timestamp = createTimeStamp()


    //https://stackoverflow.com/questions/15735159/javascript-generate-a-two-digits-positive-random-number
    const random =  Math.floor(Math.random() * 9 + 1);
    
    const id = timestamp + random
    
    // console.log(id)
  
    return Number(id)
}

export default createChatTime;