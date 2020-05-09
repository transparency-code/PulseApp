import React, { useState } from 'react';
import getInitialRequests from './getRequests'

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [requests, setRequests] = useState(0);

  return (
    <div>
      {requests}
    </div>
  );
}
