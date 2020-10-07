import React from 'react';

function DisplayText({ lbltext, datatext }) {
    return (
        <div className="container">
            <div className="row">
                {lbltext && <div className="col-sm">
                    <div className="p-3 mb-2 bg-white text-dark">{lbltext}</div>
                </div>}

                {datatext && <div className="col-sm">
                    <div className="p-3 mb-2 bg-dark text-white">{datatext}</div>
                </div>}
            </div>
        </div>

    );
}

export default DisplayText;