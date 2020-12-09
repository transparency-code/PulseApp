import trim from 'lodash/trim'

export default function validateInput(input) {
    const trimmed = trim(input)
    if( trimmed === '' || !/^\S+@\S+$/.test(trimmed)) return false

    //else
    return true

  }

