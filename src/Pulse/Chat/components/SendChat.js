import React from 'react';
import PropTypes from 'prop-types';
import DoneButton from 'Pulse/components/DoneButton'

//flex	Displays an element as a block-level flex container
//The margin-left property sets the left margin of an element.
//auto - the browser calculates the margin
//https://stackoverflow.com/questions/63616252/material-ui-box-border-for-float-right-bootstrap-element/63616504#63616504
const styles = {
  input: {
    display: "flex",
    marginLeft: "auto"
  }
}

SendChat.propTypes = {
    handleSubmitFunc : PropTypes.func.isRequired,
    chatTxt : PropTypes.string.isRequired,
    setChatTxtFunc : PropTypes.func.isRequired,
};


export default function SendChat({handleSubmitFunc, chatTxt, setChatTxtFunc, loading, displayMsg}) {
//console.log(loading)

    return (
       <div>
        <form pt={1}>
        <div className="form-group">
         <textarea
            className="form-control"
            id="chatTextArea"
            rows="2"
            value={chatTxt}
            onChange={ event => setChatTxtFunc(event.target.value)}
          ></textarea>
        </div>

        <div style={styles.input}>
       <span>{displayMsg}</span>
        {/* <button type="button" className="btn btn-primary" style={styles.input} onClick={handleSubmitFunc} disabled={loading}> Send </button> */}

        <DoneButton label={"Send"}
         execFunc={handleSubmitFunc} 
         StyleObject={styles.input}
         loading={loading} 
         />
        </div>

      </form>
    </div>  

    );
}
