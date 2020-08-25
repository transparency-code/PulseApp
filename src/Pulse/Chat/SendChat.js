import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

SendChat.propTypes = {
    handleSubmitFunc : PropTypes.func.isRequired,
    chatTxt : PropTypes.string.isRequired,
    setChatTxtFunc : PropTypes.func.isRequired
};

function SendChat({handleSubmitFunc, chatTxt, setChatTxtFunc}) {


    return (
        <Box component="div" pt={1}>
        <form onSubmit={handleSubmitFunc}>
        <div className="form-group">
         <textarea
            className="form-control"
            id="chatTextArea"
            rows="2"
            value={chatTxt}
            onChange={ event => setChatTxtFunc(event.target.value)}
          ></textarea>
        </div>

        <input type="submit" className="btn btn-primary"  value="Send"/>
      </form>
      </Box>
    );
}

export default SendChat;