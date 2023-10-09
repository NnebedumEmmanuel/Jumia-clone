import React from "react";
import "../Style/footer.css";

function Footer() {
  return (
    // <div className="footer">
    //   <a
    //     href="https://github.com/michaelkasingye"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Developer | Nnebedum Emmanuel
    //   </a>
      <div className="footer_setions">
        <div className="sections">
          <h6>LET US HELP YOU</h6>
          <p>Stay Safe</p>
          <p>Help Center</p>
          <p>Payment Methods</p>
        </div>

        <div className="sections">
          <h6>ABOUT Eport </h6>
          <p>About us</p>
          <p>Eport Careers</p>
          <p>IPR Protection Policy</p>
        </div>

        <div className="sections">
          <h6>MAKE MONEY WITH US</h6>
          <p>Sell on Jumia</p>
          <p>Become a Sales Consultant</p>
          <p>Become a Logistics Service Partner</p>
        </div>

      </div>
  );
}

export default Footer;
