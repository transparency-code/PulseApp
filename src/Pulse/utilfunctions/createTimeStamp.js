

//impure function. do not test
function createTimeStamp() {

     //https://usefulangle.com/post/187/nodejs-get-date-time

    const date_ob = new Date();

  const year4digit = date_ob.getFullYear().toString()

  const year2digit = year4digit.slice(-2)

  const hours = date_ob.getHours();

  const month = ("0" + (date_ob.getMonth() + 1)).slice(-2)

  const minutes = ("0" + date_ob.getMinutes()).slice(-2)

  const date = ("0" + date_ob.getDate()).slice(-2);

  const seconds = ("0" + date_ob.getSeconds()).slice(-2);

  const timestamp = year2digit + month + date + hours + minutes + seconds

  return Number(timestamp)
}

export default createTimeStamp;