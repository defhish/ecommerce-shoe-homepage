import "./App.css";
import phone from "./assets/phone.png";
import mail from "./assets/mailicon.png";
import gps from "./assets/location.png";
import facebook from "./assets/facebook.png";
import insta from "./assets/instagram.png";
import x from "./assets/twitter.png";
import mcard from "./assets/mastercard.png";
import paypal from "./assets/paypal.png";
import visa from "./assets/visa.png";
import btc from "./assets/bitcoin.png";
import apay from "./assets/applepay.png";
import gpay from "./assets/googlepay.png";

function App() {
  const number = "+91 7622817924";
  const mailid = "drcollections.com";
  const add1 = "xyz, address line 1";
  const add2 = "xyz, address line 2";
  const citycode = "City and Pincode";
  const country = "state, country";

  return (
    <div className="container">
      <div className="section">
        <h1 className="heading-contact">Contact Us</h1>
        <div className="contact-item">
          <img className="icons" src={phone} alt="phone" />
          <p className="content-contact">{number}</p>
        </div>
        <div className="contact-item">
          <img className="icons-mail" src={mail} alt="mail" />
          <p className="content-contact">{mailid}</p>
        </div>
        <div className="contact-item-location">
          <img className="icon-gps" src={gps} alt="gps" />
          <div className="content-contact">
            <p>{add1}</p>
            <p>{add2}</p>
            <p>{citycode}</p>
            <p>{country}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h1 className="heading">Company</h1>
        <div className="content">
          <div className="spacing">
            <p>About Us</p>
          </div>
          <div className="spacing">
            <p>Careers</p>
          </div>
          <div className="spacing">
            <p>Terms & Conditions</p>
          </div>
          <div className="spacing">
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Blog</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h1 className="heading">Customer Service</h1>
        <div className="content">
          <div className="spacing">
            <p>Track Order</p>
          </div>
          <div className="spacing">
            <p>Return Order</p>
          </div>
          <div className="spacing">
            <p>Cancel Order</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h1 className="heading">Connect with us:</h1>
        <div>
          <img className="icons" src={facebook} alt="facebook" />
          <img className="icons" src={insta} alt="instagram" />
          <img className="icons" src={x} alt="twitter" />
        </div>
      </div>

      <div className="section">
        <h1 className="heading">Payment Gateway</h1>
        <div>
          <img className="icons-payment" src={visa} alt="visa" />
          <img className="icons-payment" src={paypal} alt="paypal" />
          <img className="icons-payment" src={mcard} alt="mastercard" />
        </div>
        <div>
          <img className="icons-payment" src={apay} alt="applepay" />
          <img className="icons-payment" src={gpay} alt="googlepay" />
          <img className="icons-payment" src={btc} alt="bitcoin" />
        </div>
      </div>
      <div className="footer">
        <p>designed and maintained by clumoss</p>
      </div>
    </div>
  );
}

export default App;
