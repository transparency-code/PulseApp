import getDateDisplayStringFromID from './getDateDisplayStringFromID'

function getDateTimeDisplayString(idString) {
    // //eg:20050916180983
    const dateString = getDateDisplayStringFromID(idString)
  
    
    const hour = idString.slice(6,8)
    const minute= idString.slice(8,10)

    let hourIn12Hour = hour
    let amPmString = 'am'

 
    if (hour > 12) {
        hourIn12Hour = hour -12
         amPmString = 'pm'
    } 
    

    const dateTimeString = `${dateString} ${ hourIn12Hour}.${minute} ${amPmString}`
  
    return dateTimeString
}

export default getDateTimeDisplayString;