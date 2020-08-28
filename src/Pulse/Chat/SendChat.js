import React from 'react';
import PropTypes from 'prop-types';

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

function SendChat({handleSubmitFunc, chatTxt, setChatTxtFunc}) {


    return (
       <div>
        <form onSubmit={handleSubmitFunc} pt={1}>
        <div className="form-group">
         <textarea
            className="form-control"
            id="chatTextArea"
            rows="2"
            value={chatTxt}
            onChange={ event => setChatTxtFunc(event.target.value)}
          ></textarea>
        </div>

        <input type="submit" className="btn btn-primary" style={styles.input} value="Send" />
      </form>
    </div>  

    );
}

export default SendChat;