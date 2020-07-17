import React, { useState } from 'react';
import getFileNameFromPrefixed from "Pulse/utilfunctions/getFileNameFromPrefixed"
import getSignedUrlPromise from 'AWS/getSignedUrl'

export default function S3FileLink({fileKey}) {

    const [url, setUrl] = useState('');

    const fileName = getFileNameFromPrefixed(fileKey)
    getSignedUrlPromise(fileKey, setUrl)

    return (
        <a href={url}>{fileName}</a>
    )
}
