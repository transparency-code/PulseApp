export function fileSizeinText(sizeinByte) {   
    return String(Math.ceil(sizeinByte/1024)).concat(" KB")
}

export function GetNameAndSize(file) {   
   return ({
       name : file.name,
       size : fileSizeinText(file.size)
   })
}
