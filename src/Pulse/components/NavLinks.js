import React from 'react'

export default function NavLinks() {

    
    return (
        (
            <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="/createRequest">Create Request</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/displayinitial">Display Initial Requests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="displayuser">Display User Requests</a>
            </li>
          </ul>
          )
    )
}
