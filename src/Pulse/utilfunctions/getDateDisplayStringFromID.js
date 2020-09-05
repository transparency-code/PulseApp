export default function getDateDisplayStringFromID(projectId) {
  //eg:20050916180983
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
  //str.slice(beginIndex[, endIndex])
  //The zero-based index at which to begin extraction
// console.log(projectId)
  const year = projectId.slice(0,2)
  //console.log(year)
  const month = projectId.slice(2,4)
  const day = projectId.slice(4,6)

  const hour = projectId.slice(6,8)

  const minute = projectId.slice(8,10)

  const dateString = `${day}-${month}-${year} ${hour}:${minute}`

  return dateString

}
