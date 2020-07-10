export default function getFileNameFromPrefixed(fileString) {
    const n = fileString.lastIndexOf('/');
    const fileName = fileString.slice(n+1)
    return fileName
}
