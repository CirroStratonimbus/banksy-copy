import React from "react";

// question and answer page
function QA(props) {
    return (
        <div>
            <p className="pParagraph">
            For all enquiries, complaints, threats and hate mail visit pestcontroloffice.com.
Banksy is not on Facebook, Twitter or represented by any other gallery or institution.
            </p>
            <img className="carousel" src={props.props} alt="caricature" />

        </div>
    )
}
export default QA;