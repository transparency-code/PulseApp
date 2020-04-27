export function removeKeysWithNull(obj) {

    //https://zellwk.com/blog/looping-through-js-objects/
    const keys = Object.keys(obj)

    for (const key of keys) {
        if ( obj[key] === "") {
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
            delete obj[key]
        }
      }

      return obj
}