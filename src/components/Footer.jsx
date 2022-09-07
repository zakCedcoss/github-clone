import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
function Footer({ login }) {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaFacebook />
        <FaInstagram />
        <FaLinkedin />
        <FaGithub />
        <FaTwitter />
      </div>
      <div className="footer-name">@ {login ? login : "devilboy"}</div>
      <span style={{ fontSize: "0.7rem" }}>
        Made By Zeeshan Ahmad Khan (ZAK)
      </span>
    </div>
  );
}

export default Footer;
