import React from "react";
import licensing1 from './images/fake-licensing.jpg'

// licensing component
function Licensing() {
    return(
        <div>
        <h1 className="pParagraph">Licensing</h1>
        <p className="pParagraph">Are you a company looking to licence Banksy art for commercial use? Then you’ve come to the right place – you can’t. Only Pest Control Office have permission to use or license my artwork. If someone else has granted you permission, you don’t have permission. I wrote ‘copyright is for losers’ in my (copyrighted) book and still encourage anybody to take and amend my art for their own personal amusement, but not for profit or making it look like I've endorsed something when I haven't. Thanks</p>
        <img className="carousel" scr={licensing1} alt="licensing"/>
        </div>
    )
}
export default Licensing;