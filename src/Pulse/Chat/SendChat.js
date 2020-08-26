import React from 'react';
import PropTypes from 'prop-types';


SendChat.propTypes = {
    handleSubmitFunc : PropTypes.func.isRequired,
    chatTxt : PropTypes.string.isRequired,
    setChatTxtFunc : PropTypes.func.isRequired
};

function SendChat({handleSubmitFunc, chatTxt, setChatTxtFunc}) {


    return (

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

        <input type="submit" className="btn btn-primary float-right"  value="Send" />
      </form>

    );
}

export default SendChat;