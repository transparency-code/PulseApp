import React from 'react'

export default function index() {

    return (

        <form>
        <div className="form-group">
          <textarea
            className="form-control"
            id="chatTextArea"
            rows="3"
          ></textarea>
        </div>

        <button type="button" className="btn btn-primary">Send</button>
      </form>

      
    )
}
