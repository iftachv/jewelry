import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <ul>
          <p className="Contact">Contact Info</p>
          <li className="Location">
            <LocationOnIcon fontSize="1px" /> Israel- Tel-Aviv
          </li>
          <li className="Phone ">
            <LocalPhoneIcon fontSize="1px" /> 054-4235214
          </li>
          <li className="Mail">
            <EmailIcon fontSize="1px" />
            jewelry213@gmail.com
          </li>
          <ul className="footer-icon">
            <li className="">
              <FacebookIcon />
            </li>
            <li className="">
              <WhatsAppIcon />
            </li>
            <li className="">
              <InstagramIcon />
            </li>
          </ul>
        </ul>
        <ul>
          <p className="information">INFORMATION</p>
          <li className=" AboutUs "> About Us</li>
          <li className=" Price ">Price </li>
          <li className="  ">New Product </li>
          <li className="  "> Best Seles</li>
          <li className="  "> </li>
        </ul>
        <ul>
          <p className="  "> </p>
          <li className="  "> </li>
          <li className="  "> </li>
          <li className="  "> </li>
          <li className="  "> </li>
          <li className="  "> </li>
          <li className="  "> </li>
        </ul>
        <ul>
          <p className=" Image "> Images </p>
          <img
            width="300px"
            className="img-fluid"
            src="	https://jewellery-ec2de.web.app/static/media/footer.5ebc0c6e.png"
            alt=""
          />
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
