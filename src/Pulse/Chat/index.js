import React from 'react'

/**
 * 
 * @param {*} param0 
 */
export default function index({email,projectid}) {

  // console.log(email)
  // console.log(projectid)
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
